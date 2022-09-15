import Image from "next/image";

const PostContent = () => {
  return (
    <>
      <div className="postConentWrapper">
        <h1>Today's Merge Could Vindicate Ethereum — or Destroy It</h1>
        <p>Either way, it's going to be exciting</p>
        <Image
          src={"https://miro.medium.com/max/700/0*omCcpplSKIuMXmHp"}
          height={500}
          objectFit="cover"
          width={1000}
          className="postThumbnail"
        />
        <div className="post">
          Tonight marks one of the most significant events in cryptocurrency
          history; the long-awaited Ethereum merge. The merge has the potential
          to change how cryptocurrency blockchains operate in dramatic ways. The
          merge could revolutionize Ethereum, making it both larger and
          significantly greener overnight. Or it could crash the network and
          plunge it into a lengthy quagmire of scrabbling and infighting from
          which it never recovers. Given that Ethereum has a market cap of
          nearly $200 billion as I write this, the impact of the merge will be
          significant no matter what happens. What is the Merge? Since its
          inception, Ethereum has used a Proof of Work blockchain that is
          similar to the blockchain used for Bitcoin, the most prominent and
          well-known coin. Proof of work essentially uses computing power and
          massive amounts of electricity to secure the blockchain and lend value
          to cryptocurrency tokens. The developers behind Ethereum–who work as a
          decentralized collective–have increasingly felt that Proof of Work
          isn’t sustainable. Proof of Work blockchains use massive amounts of
          electrical power and billions of dollars worth of equipment.
          Especially with much of Europe facing massive natural gas shortages
          and electrical supply issues following the war in Ukraine, sucking
          down huge amounts of energy to run a digital token system feels
          increasingly wrong and untenable. For that reason–as well as some more
          technical ones–Ethereum has long run a separate Ethereum 2 blockchain
          based on Proof of Stake instead of Proof of Work. Under this model,
          Ethereum transactions are verified by having people hold and “stake”
          the network’s Ether coin instead of having them use massive amounts of
          computing power. Tonight–after many delays and false starts–Ethereum’s
          developers plan to merge the two blockchains together, moving the
          whole network to the less power-hungry Proof of Stake model. When Does
          the Merge Happen? The exact moment of the merge is determined by
          technical factors that were decided in advance. Since Ethereum is
          decentralized, no one person or group controls the entire process.
          Based on how the network is operating at the moment, though, the merge
          will likely take place sometime on the evening of September 14.
          Already, many groups are getting together to hold watch parties and
          celebrate this long-anticipated event. What Could Go Wrong? Although
          the merge is exciting, lots of things could go wrong. In a recent
          report, the Economist likened the merge itself to changing out the
          engine of an airplane while it’s in flight. The overall goal of the
          merge is to have no downtime on the network. Pulling that off will be
          an impressive technical feat. Beyond that, though, there’s the bigger
          issue of adoption. Because Ethereum is decentralized, not every member
          (or “node”) of the network needs to agree to the merge. Nodes can opt
          to remain on the old Proof of Work blockchain, creating what’s called
          a “fork” of the network. Some will undoubtedly do so. Many miners have
          invested millions of dollars into equipment to verify transactions
          under the old Proof of Work model, so they’ll likely be loath to give
          up the model entirely. That said, many exchanges and decentralized
          finance apps will likely make the switch to the new Ethereum
          blockchain. If enough people do, the old chain will be a bit like a
          dying shopping mall; you can still have a store there, but with no big
          anchor stores and no foot traffic, you’re probably not going to sell
          much. Longer term, the move to Ethereum 2 is a massive experiment in
          the success of a Proof of Stake model. It’s a bit like America’s
          transition from the gold standard to today’s currency. Previously,
          money was backed by a real asset: gold. Today, it’s not backed by
          anything other than the fact that lots of people use it and the
          government says it’s legal tender. The merge is similar. Whereas Ether
          was previously backed at least in part by the massive expense
          associated with mining coins, a coin likely had some intrinsic value.
          After the merge, the value will be based essentially on how many
          people choose to hold the coins. People could refuse the merge,
          splintering Ethereum into multiple concurrent blockchains operating
          under different models, destroying its value. The merge could also
          demonstrate that Proof of Stake doesn’t work at scale and that the
          whole experiment of moving away from energy-intensive blockchains was
          only a utopian dream. What Could Go Right with the Merge? At the same
          time, a large number of things could go right with the Ethereum merge.
          If the network’s developers pull off the technical wizardry of moving
          the network to a new model while it remains in operation, that will be
          a big feather in the cap of people who feel that the Internet should
          be decentralized and open (a concept currently known as Web3.)
          Previously, we relied on huge companies to keep our services running.
          If Ethereum’s decentralized and motley crew of developers can pull off
          the same kind of process with radically fewer resources, that will be
          a big step towards validating blockchains and their decentralized
          models. The biggest advantage of the merge, though, is that it will
          likely radically reduce the amount of electrical power consumed by
          cryptocurrency mining, literally overnight. Because Proof of Stake
          requires only a tiny fraction of the power used by Proof of Work, the
          move to Ethereum 2 will be like removing an entire country from the
          electrical grid. No one knows exactly how this will play out, in part
          because no one knows exactly where and how Ether is currently being
          mined. If mining is taking place in a few locations, electricity
          prices in those locations could drop quickly as a big source of demand
          comes offline. There could even be grid instability in some
          locations–hopefully, grid operators are anticipating the effects of
          the merge and are ready. Longer term, if Proof of Stake works, other
          blockchains could move to this model as well. That would cement the
          long-term sustainability of blockchains and eliminate their most
          costly issue–the massive amounts of electrical power and computing
          hardware they consume. Get Ready! Whatever happens, the merge is a
          huge deal for the world of cryptocurrency. It could validate the
          importance of blockchains, destroy billions of dollars of value
          overnight, or achieve some middling outcome between those two
          extremes. Either way, it’s happening. Get out your popcorn, keep an
          eye on your coins, and let’s see what goes down tonight. This article
          is for informational purposes only and should not be construed as
          investment, tax or legal advice. Always consult a professional advisor
          for advice specific to your situation before making any major
          financial decisions, and never invest more than you can afford to
          lose. Thomas Smith holds a diversified investment portfolio that
          includes a variety of securities and cryptocurrencies.
        </div>
      </div>
    </>
  );
};

export default PostContent;
