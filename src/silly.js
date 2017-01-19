var Base = requireBaseModule();

var Silly = function(bot) {
    Base.call(this, bot);
    var lastReaction = undefined;
    this.hear(/IH/, (response) => {
        if(response.channel.name === 'mission-control') {
            if(!lastReaction || (Date.now() - lastReaction) > 1000 * 60 * 10) {
                response.channel.send('IH');
                lastReaction = Date.now();
            }
        }
    });
};

module.exports = Base.setup(Silly);
