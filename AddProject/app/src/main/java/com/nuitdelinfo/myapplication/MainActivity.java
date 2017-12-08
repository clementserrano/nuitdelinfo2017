package com.nuitdelinfo.myapplication;

import android.Manifest;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.net.Uri;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

import java.util.logging.Logger;

public class MainActivity extends AppCompatActivity implements OnMapReadyCallback {

  private GoogleMap mMap;
  private LocationListener mLocationListener;
  private LocationManager mLocationManager;

  private static final int MY_PERMISSION_FINE_LOCATION = 6;

  public static final int LOCATION_UPDATE_MIN_DISTANCE = 10;
  public static final int LOCATION_UPDATE_MIN_TIME = 5000;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    Toolbar toolbar = findViewById(R.id.toolbar);
    setSupportActionBar(toolbar);

    FloatingActionButton fab = findViewById(R.id.fab);
    fab.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View view) {
        getCurrentLocation();
      }
    });

    SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
      .findFragmentById(R.id.map);
    mapFragment.getMapAsync(this);

    mLocationListener = new LocationListener() {
      @Override
      public void onLocationChanged(Location location) {
        if (location != null) {
          drawMarker(location);
        }
      }

      @Override
      public void onStatusChanged(String s, int i, Bundle bundle) {

      }

      @Override
      public void onProviderEnabled(String s) {

      }

      @Override
      public void onProviderDisabled(String s) {

      }
    };

    mLocationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);

  }

  @Override
  public void onMapReady(GoogleMap googleMap) {
    mMap = googleMap;

    // Add a marker in Sydney and move the camera
    /*
    LatLng sydney = new LatLng(-34, 151);
    mMap.addMarker(new MarkerOptions().position(sydney).title("Marker in Sydney"));
    mMap.moveCamera(CameraUpdateFactory.newLatLng(sydney));*/

    mMap.getUiSettings().setZoomControlsEnabled(true);     // affiche les boutons de zoom
    mMap.getUiSettings().setZoomGesturesEnabled(true);     // autorise le zoom tactile
    mMap.getUiSettings().setCompassEnabled(false);         // n'affiche pas le compas

    if (ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {
      mMap.setMyLocationEnabled(true);
      mMap.getUiSettings().setMyLocationButtonEnabled(true); // affiche le bouton de localisation
    } else {
      ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, MY_PERMISSION_FINE_LOCATION);
    }
  }

  @Override
  public boolean onCreateOptionsMenu(Menu menu) {
    getMenuInflater().inflate(R.menu.main_activity_menu, menu);
    return super.onCreateOptionsMenu(menu);
  }

  @Override
  public boolean onOptionsItemSelected(MenuItem item) {
    int id = item.getItemId();

    if(id == R.id.action_appel) {
      launchAppelUrgence();
    }

    if(id == R.id.action_reaction){
      launchActionReaction();
    }

    if(id == R.id.action_premier_secours){
      launchPremierSecours();
    }
    return super.onOptionsItemSelected(item);
  }

  private AlertDialog showAlertDialog(final Location location){

    AlertDialog.Builder builder = new AlertDialog.Builder(this);
    // Get the layout inflater
    LayoutInflater inflater = getLayoutInflater();

    // Inflate and set the layout for the dialog
    // Pass null as the parent view because its going in the dialog layout
    builder.setView(inflater.inflate(R.layout.alert_dialog, null))
      // Add action buttons
      .setPositiveButton("Valider", new DialogInterface.OnClickListener() {
        @Override
        public void onClick(DialogInterface dialog, int id) {
          String typeAccident = (String)((Spinner)((AlertDialog)dialog).findViewById(R.id.spinner_type_accident)).getSelectedItem();
          String precisions = ((EditText)((AlertDialog)dialog).findViewById(R.id.input_precisions)).getText().toString();
          Toast.makeText(MainActivity.this, "Type accident = "+typeAccident+", precision = "+precisions+" localisation : "+location, Toast.LENGTH_SHORT).show();
        }
      })
      .setNegativeButton("Annuler", new DialogInterface.OnClickListener() {
        public void onClick(DialogInterface dialog, int id) {
          dialog.cancel();
        }
      });
    return builder.create();

  }

  private void launchAppelUrgence(){
    Intent call = new Intent(Intent.ACTION_DIAL);
    call.setData(Uri.parse("tel:112"));
    startActivity(call);
  }

  private void launchActionReaction(){
    Intent intentForReactioNActivity = new Intent(this,ReactionActivity.class);
    startActivity(intentForReactioNActivity);
  }

  private void launchPremierSecours(){
    //TODO
  }

  private void getCurrentLocation() {
    boolean isGPSEnabled = mLocationManager.isProviderEnabled(LocationManager.GPS_PROVIDER);
    boolean isNetworkEnabled = mLocationManager.isProviderEnabled(LocationManager.NETWORK_PROVIDER);

    if (ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {

      Location location = null;
      if (!(isGPSEnabled || isNetworkEnabled))
        Toast.makeText(this, "Pas de GPS disponible", Toast.LENGTH_LONG).show();
      else {
        if (isNetworkEnabled) {
          mLocationManager.requestLocationUpdates(LocationManager.NETWORK_PROVIDER,
            LOCATION_UPDATE_MIN_TIME, LOCATION_UPDATE_MIN_DISTANCE, mLocationListener);
          location = mLocationManager.getLastKnownLocation(LocationManager.NETWORK_PROVIDER);
        }

        if (isGPSEnabled) {
          mLocationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER,
            LOCATION_UPDATE_MIN_TIME, LOCATION_UPDATE_MIN_DISTANCE, mLocationListener);
          location = mLocationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER);
        }
      }
      if (location != null) {
        drawMarker(location);
        showAlertDialog(location).show();
      }
    }else{
      Toast.makeText(this,"L'application n'as pas les autorisations nécessaires pour vous géolocaliser",Toast.LENGTH_LONG).show();
    }
  }

  private void drawMarker(Location location) {
    if (mMap != null) {
      mMap.clear();
      LatLng gps = new LatLng(location.getLatitude(), location.getLongitude());
      mMap.addMarker(new MarkerOptions()
        .position(gps)
        .title("Current Position"));
      mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(gps, 12));
    }

  }

  @Override
  public void onRequestPermissionsResult(int requestCode,
                                         String permissions[], int[] grantResults) {
    switch (requestCode) {
      case MY_PERMISSION_FINE_LOCATION: {
        // If request is cancelled, the result arrays are empty.
        if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
          mMap.setMyLocationEnabled(true);
          mMap.getUiSettings().setMyLocationButtonEnabled(true); // affiche le bouton de localisation
        } else {
          Toast.makeText(this,"Vous ne pourez pas profiter pleinement de l'application sans les autorisations nécessaires !",Toast.LENGTH_LONG).show();
        }
      }
    }
  }

}
