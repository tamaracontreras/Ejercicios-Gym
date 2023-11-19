function blackjack(a, b){
    if((a  > 21) && (b > 21 )){
     return 0; 
    }
    else{ 
      if(a > 21)
      return b;
    if (b >21)
    return a;
    if(a <b)
      return b;
    if(b <a)
      return a;    
    }
  }