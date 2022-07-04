import React, { useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { styles, calculatedValue } from '../../Styles'

// Externe Components
import { WebView } from 'react-native-webview';

export function Trailer({ uriMovie }) {

  const rendu = (/\/null?/.test(uriMovie)) ? 
              <Text style={styles.txtNoFound}>No trailer found</Text>
              : <WebView source={{ uri: uriMovie }}
                  startInLoadingState={true}
                  renderLoading={this.renderLoadingView}
                  containerStyle={{ marginTop: 20 }}
                  style={{
                    width: calculatedValue.imgWidth,
                  }}
                />;
  return rendu
}