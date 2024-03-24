const cardHeight = 300;

const styles = {
  screenContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'space-between',
    justifyContent: 'space-between'
  },
  screen: (total, section) => {
    const isLeft = section === 'left';

    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: isLeft ? 'flex-end' : 'flex-start',
      backgroundColor: 'grey',
      height: (total * cardHeight),
      width: '49%',
      paddingTop: 150,
      paddingRight: isLeft ? 30 : 0,
      paddingLeft: isLeft ? 0 : 30
    }
  },
  // TODO: need to add memoize
  line: (total) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    height: total * cardHeight,
    width: '1%'
  }),
  // TODO: need to add memoize
  round: (index) => ({
    position: 'absolute',
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
    top: (index * cardHeight) + 150
  })
}

export default styles;
