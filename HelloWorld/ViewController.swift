//
//  ViewController.swift
//  HelloWorld
//
//  Created by Jan Hellar on 08.03.18.
//  Copyright © 2018 Jan Hellar. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var TestLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func OnTouch(_ sender: Any) {
        TestLabel.text = "HelloWorld"
    }
    
}

