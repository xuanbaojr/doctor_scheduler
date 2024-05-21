const chat = () => {
    return (
      <div style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        }}>
          <div style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "gray",
            paddingLeft: 20, 
            paddingRight: 20,
            flex: 1,
            marginLeft: 20, 
            marginRight: 20
            }}>
            <input
              style={{
                flex: 1,
                height: 40,
                marginLeft: 10,
              }}
              placeholder="Nhập từ khóa..."
              // value={searchText}
              // onChangeText={setSearchText}
            />
            <button
              style={{
                paddingTop: 10, 
                paddingBottom: 10,
                borderRadius: 20,
              }}
              // onPress={handleSearch}
            > aaa
              {/* <Ionicons
                name="search"
                size={24}
                color="black"
                style={{
                  marginRight: 10,
                }}
              /> */}
            </button>
          </div>
        </div>
    )   
  }
   
  export default chat;