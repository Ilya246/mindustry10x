if (Core.settings.getInt("m10x_multiplyWaveCounts", -1) == -1) {
    Core.settings.put("m10x_multiplyWaveCounts", java.lang.Integer(1));
}
multiplyWaveCounts = Core.settings.get("m10x_multiplyWaveCounts", -1) == 1;
Events.on(WorldLoadEvent, e => {
    Vars.world.tiles.eachTile(t=>{if(t.build){t.build.health *= 10}});
    Core.app.post(() => {
        if (multiplyWaveCounts) {
       	    Vars.state.rules.spawns.each(s => {
                s.max *= 10;
                s.unitAmount *= 10;
                s.unitScaling *= 10;
            });
        }
    });
});

Vars.content.bullets().each(b => {
    b.damage *= 10;
    b.lifetime *= 2;
    b.range *= 2;
    if (b.length) {
        b.length *= 2;
    }
    b.pierceCap *= (b.pierceCap < 0 ? 1 : 10);
    b.splashDamage *= 10;
    b.splashDamageRadius *= (b.splashDamageRadius < 0 ? 1 : 2);
    b.ammoMultiplier *= 10;
    b.homingRange *= 10;
    b.homingPower *= 10;
    b.lightningDamage *= (b.lightningDamage < 0 ? 1 : 10);
});

Vars.content.units().each(u => {
    u.health *= 10;
    u.range *= 2;
    u.armor *= 10;
    u.speed *= 2;
    u.rotateSpeed *= 10;
    u.itemCapacity *= 10;
    u.buildSpeed *= (u.buildSpeed < 0 ? 1 : 10);
    u.buildRange *= 10;
    u.mineSpeed *= 10;
    u.mineTier *= (u.mineTier < 0 ? 1 : 10);
    u.weapons.each(w => {
        w.rotateSpeed *= 10;
        w.reload /= 10;
        w.inaccuracy *= 10;
        w.shake *= 10;
        if (w.repairSpeed) {
            w.repairSpeed *= 10;
        }
    });
    u.abilities.each(a => {
        if (a instanceof UnitSpawnAbility) {
            a.spawnTime /= 10;
        }
        if (a.amount) {
            a.amount *= 10;
        }
        if (a.cooldown) {
            a.cooldown /= 10;
        }
        if (a.max) {
            a.max *= 10;
        }
        if (a.radius) {
            a.radius *= 10;
        }
        if (a.range) {
            a.range *= 10;
        }
        if (a.regen) {
            a.regen *= 10;
        }
        if (a.reload) {
            a.reload /= 10;
        }
        if (a instanceof ShieldArcAbility) {
            a.width *= 10;
        }
        if (a instanceof LiquidRegenAbility) {
            a.regenPerSlurp *= 10;
            a.slurpSpeed *= 10;
        }
        if (a instanceof EnergyFieldAbility) {
            a.damage *= 10;
        }
    });
});

Vars.content.statusEffects().each(s => {
    s.damage *= 10;
    s.transitionDamage *= 10;
});

Vars.content.blocks().each(b => {
    if (b.dragMultiplier) {
        b.dragMultiplier = Mathf.pow(b.dragMultiplier, 10);
    }
    b.health *= 10;
    b.itemCapacity *= 10;
    b.liquidCapacity *= 10;
    b.armor *= 10;
    b.baseExplosiveness *= 10;
    b.consumers.forEach(c => {
        if (c instanceof ConsumePower) {
            c.capacity *= 10;
        }
    });
    if (b instanceof PowerGenerator) {
        b.explosionRadius *= 10;
        b.explosionDamage *= 10;
        b.explosionPuddles *= 10;
        b.explosionPuddleAmount *= 10;
        b.powerProduction *= 10;
    }
    if (b.speed) {
        b.speed *= 10;
    }
    if (b.capacity) {
        b.capacity *= 10;
    }
    if (b.range) {
        b.range *= 10;
    }
    if (b.radius) {
        b.radius *= 10;
    }
    if (b.rotateSpeed) {
        b.rotateSpeed *= 10;
    }
    if (b.reload) {
        b.reload /= 10;
    }
    if (b.damage) {
        b.damage *= 10;
    }
    if (b.maxAmmo) {
        b.maxAmmo *= 10;
    }
    if (b.bulletDamage) {
        b.bulletDamage *= 10;
    }
    if (b.fogRadius) {
        b.fogRadius *= 2;
    }
    if (b instanceof Turret) {
        b.range /= 5;
    }
    if (b instanceof BaseShield) {
        b.radius /= 10;
    }
    if (b instanceof ShockMine) {
        b.cooldown /= 10;
        b.length *= 10;
        b.tendrils *= 10;
        b.shots *= 10;
    }
    if (b.shieldHealth) {
        b.shieldHealth *= 10;
    }
    if (b instanceof ForceProjector) {
        b.phaseRadiusBoost *= 10;
        b.phaseShieldBoost *= 10;
        b.cooldownNormal /= 10;
        b.cooldownBrokenBase /= 10;
    }
    if (b instanceof ShieldWall) {
        b.breakCooldown /= 10;
        b.regenSpeed *= 10;
    }
    if (b.phaseRangeBoost) {
        b.phaseRangeBoost *= 10;
    }
    if (b instanceof OverdriveProjector) {
        b.speedBoost = 1 + (b.speedBoost - 1) * 10;
        b.speedBoostPhase *= 10;
    }
    if (b instanceof BuildTurret) {
        b.buildSpeed *= 10;
    }
    if (b instanceof TractorBeamTurret) {
        b.force *= 10;
    }
    if (b instanceof LaserTurret) {
        b.shootDuration *= 10;
    }
    if (b instanceof BufferedItemBridge) {
        b.bufferCapacity *= 10;
    }
    if (b instanceof MassDriver) {
        b.bulletLifetime *= 10;
        b.shake *= 10;
    }
    if (b instanceof HeatProducer) {
        b.heatOutput *= 10;
    }
    if (b instanceof BlockProducer) {
        b.buildSpeed *= 10;
    }
    if (b instanceof PayloadBlock) {
        b.payloadSpeed *= 10;
        b.payloadRotateSpeed *= 10;
    }
    if (b instanceof PayloadDeconstructor) {
        b.maxPayloadSize *= 10;
        b.deconstructSpeed *= 10;
    }
    if (b instanceof PayloadMassDriver) {
        b.chargeTime /= 10;
    }
    if (b instanceof PayloadConveyor) {
        b.moveTime /= 10;
        b.moveForce *= 10;
        b.payloadLimit *= 10;
    }
    if (b instanceof LogicBlock) {
        b.instructionsPerTick *= 10;
    }
    if (b instanceof MemoryBlock) {
        b.memoryCapacity *= 10;
    }
    if (b.drillTime) {
        b.drillTime /= 10;
    }
    if (b.tier) {
        b.tier *= 10;
    }
    if (b instanceof Pump) {
        b.pumpAmount *= 10;
    }
    if (b.craftTime) {
        b.craftTime /= 10;
    }
    if (b instanceof Duct || b instanceof DuctBridge || b instanceof DuctRouter || b instanceof OverflowDuct || b instanceof DirectionalUnloader) {
        b.speed /= 100;
    }
    if (b instanceof CoreBlock) {
        b.thrusterLength *= 10;
    }
    if (b instanceof Reconstructor) {
        b.constructTime /= 10;
    }
    if (b instanceof RepairTower) {
        b.healAmount *= 10;
    }
    if (b instanceof RepairTurret) {
        b.repairRadius *= 10;
        b.repairSpeed *= 10;
    }
    if (b instanceof UnitAssembler) {
        b.dronesCreated *= 10;
        b.droneConstructTime /= 10;
        b.plans.each(p => p.time /= 10);
    }
    if (b instanceof UnitCargoLoader) {
        b.buildTime /= 10;
    }
    if (b instanceof UnitFactory) {
        b.plans.each(p => p.time /= 10);
    }
});
