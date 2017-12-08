package com.nuitdelinfo.myapplication;

import android.content.Context;
import android.util.Log;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Hashtable;


public class RequeteInternet {

  private String url;

  public RequeteInternet(String pfURL){
    this.url = pfURL;

  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  /**
   *
   * Fonction permettant l'envoie de la requête pfMessage
   * en POST à l'URL spécifié.
   *
   * @param pfMessage Requête envoyée au serveur
   * @return Réponse du serveur
   */

  public String envoieRequete(String pfMessage) throws Exception {

    //création de l'objet URL pour la requête
    URL url = new URL(this.url);

    //paramétrage de la requête POST
    HttpURLConnection httpUrlConnection = (HttpURLConnection) url.openConnection();

    httpUrlConnection.setReadTimeout(10000 /* milliseconds */);
    httpUrlConnection.setConnectTimeout(15000 /* milliseconds */);
    httpUrlConnection.setRequestProperty("Content-Type", "application/json");
    httpUrlConnection.setRequestProperty("charset", "UTF-8");
    httpUrlConnection.setRequestMethod("POST");
    httpUrlConnection.setDoInput(true);
    httpUrlConnection.setDoOutput(true);

    //Récupération du canaux d'envoi
    OutputStream myOS = httpUrlConnection.getOutputStream();

    //-------------------------------
    Log.i("EnvoieMSG",pfMessage);
    myOS.write((pfMessage).getBytes("UTF-8"));
    myOS.flush();
    myOS.close();

    //Connection
    httpUrlConnection.connect();


    //Récupération de la réponse
    if (httpUrlConnection.getResponseCode() == HttpURLConnection.HTTP_OK) {

      //Création du buffer
      BufferedReader reader = new BufferedReader(
        new InputStreamReader(httpUrlConnection.getInputStream(), "UTF-8"));

      //Création du constructeur de string
      StringBuilder out = new StringBuilder();

      //String désignant chaque ligne
      String line;

      while ((line = reader.readLine()) != null) { //Tant qu'on a des lignes
        line += "\n";
        out.append(line);                        //On les intègre dans notre résultat
        //Log.i("Réponse serveur ",line);
      }

      //Qu'on retransforme en String pour raison de commodité
      String rep = out.toString();

      //On ferme le lecteur
      reader.close();

      //On ferme la connexion
      httpUrlConnection.disconnect();

      return rep;

    } else {
      throw new Exception("Erreur réponse requête : "+httpUrlConnection.getResponseCode());
    }
  }
}
