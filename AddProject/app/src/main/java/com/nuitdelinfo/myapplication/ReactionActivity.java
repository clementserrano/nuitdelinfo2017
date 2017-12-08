package com.nuitdelinfo.myapplication;

import android.graphics.Color;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import java.text.DecimalFormat;
import java.text.Format;
import java.text.NumberFormat;
import java.util.Random;

public class ReactionActivity extends AppCompatActivity {

  TextView attendez;
  TextView votreTemps;
  TextView temps;
  TextView valide;
  Button buttonRelancer;
  LinearLayout layoutClick;
  RelativeLayout mainLayout;

  boolean isClickTime;
  boolean pause;

  Handler handler;

  long cliqued;


  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_reaction);

    handler = new Handler();

    attendez = findViewById(R.id.attendez);
    votreTemps = findViewById(R.id.votre_temps);
    temps = findViewById(R.id.temps);
    valide = findViewById(R.id.valide);

    buttonRelancer = findViewById(R.id.button_relancer);
    buttonRelancer.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View view) {
        launchReactionTest();
      }
    });

    layoutClick = findViewById(R.id.layout_click);

    mainLayout = findViewById(R.id.main_layout);
    mainLayout.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View view) {

        if(!pause) {
          pause = true;
          buttonRelancer.setVisibility(View.VISIBLE);
          layoutClick.setVisibility(View.VISIBLE);

          if (isClickTime) {
            inTime();
          } else {
            tooEarly();
          }
        }
      }
    });

    attendez.setText("Cliquez dès que l'écran deviens bleu !");
    attendez.setGravity(Gravity.CENTER);
    buttonRelancer.setText("Lancer");
    buttonRelancer.setVisibility(View.VISIBLE);

    pause = true;

  }

  private void launchReactionTest(){
    layoutClick.setVisibility(View.GONE);
    buttonRelancer.setVisibility(View.GONE);
    buttonRelancer.setText("Relancer");
    attendez.setVisibility(View.VISIBLE);
    attendez.setText("ATTENDEZ !");
    attendez.setTextColor(Color.GRAY);

    pause = false;

    mainLayout.setBackgroundColor(Color.WHITE);

    Random r = new Random();
    //Génère un nombre entre 2 et 10
    double tempsAleatoire = 2 + r.nextDouble()*8;

    isClickTime = false;

    handler.postDelayed(triggered,(long)tempsAleatoire*1000);
  }

  private Runnable triggered = new Runnable() {
    @Override
    public void run() {
      mainLayout.setBackgroundColor(Color.BLUE);
      attendez.setText("CLIQUEZ !");
      attendez.setTextColor(Color.WHITE);
      isClickTime = true;
      cliqued = System.currentTimeMillis();
    }
  };

  private void tooEarly(){

    attendez.setVisibility(View.GONE);
    handler.removeCallbacks(triggered);
    votreTemps.setVisibility(View.GONE);
    temps.setVisibility(View.GONE);
    mainLayout.setBackgroundColor(Color.RED);
    valide.setTextColor(Color.WHITE);
    valide.setText("HE BEN NON PLUS, T'ES BOURRE(E)");

  }

  private void inTime(){
    float time = ((System.currentTimeMillis() - cliqued)/(float)1000);
    NumberFormat f = new DecimalFormat("@@@");

    attendez.setVisibility(View.GONE);

    votreTemps.setVisibility(View.VISIBLE);
    temps.setVisibility(View.VISIBLE);
    temps.setText(f.format(time)+" s ");

    if(time < 0.5 ) {
      mainLayout.setBackgroundColor(Color.GREEN);
      valide.setText("C'EST BON !");
    }else{
      mainLayout.setBackgroundColor(Color.RED);
      valide.setText("HE BEN NON T'ES BOURRE(E)");
    }
  }

}
