const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#eecf00',
    justifyContent: 'space-between',
    padding: 10,
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '70%'
  },
  cardLeft: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  cardRight: (reverse) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: reverse ? 'flex-start' : 'flex-end',
    height: '100%',
  }),
  headline: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignContent: 'center',
  },
  textCenter: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: '100%'
    // height: 100
  }
};

export default styles;