# `loadBalancerPool` Submodule <a name="`loadBalancerPool` Submodule" id="@cdktn/provider-cloudflare.loadBalancerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerPool <a name="LoadBalancerPool" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPool;

LoadBalancerPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
    .origins(IResolvable|java.util.List<LoadBalancerPoolOrigins>)
//  .checkRegions(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .latitude(java.lang.Number)
//  .loadShedding(LoadBalancerPoolLoadShedding)
//  .longitude(java.lang.Number)
//  .minimumOrigins(java.lang.Number)
//  .monitor(java.lang.String)
//  .monitorGroup(java.lang.String)
//  .notificationEmail(java.lang.String)
//  .notificationFilter(LoadBalancerPoolNotificationFilter)
//  .originSteering(LoadBalancerPoolOriginSteering)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.origins">origins</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>></code> | The list of origins within this pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.checkRegions">checkRegions</a></code> | <code>java.util.List<java.lang.String></code> | A list of regions from which to run health checks. Null means every Cloudflare data center. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable (the default) or disable this pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.latitude">latitude</a></code> | <code>java.lang.Number</code> | The latitude of the data center containing the origins used in this pool in decimal degrees. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.loadShedding">loadShedding</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a></code> | Configures load shedding policies and percentages for the pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.longitude">longitude</a></code> | <code>java.lang.Number</code> | The longitude of the data center containing the origins used in this pool in decimal degrees. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.minimumOrigins">minimumOrigins</a></code> | <code>java.lang.Number</code> | The minimum number of origins that must be healthy for this pool to serve traffic. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.monitor">monitor</a></code> | <code>java.lang.String</code> | The ID of the Monitor to use for checking the health of origins within this pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.monitorGroup">monitorGroup</a></code> | <code>java.lang.String</code> | The ID of the Monitor Group to use for checking the health of origins within this pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | This field is now deprecated. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.notificationFilter">notificationFilter</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a></code> | Filter pool and origin health notifications by resource type or health status. Use null to reset. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.originSteering">originSteering</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a></code> | Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#account_id LoadBalancerPool#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.origins"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>>

The list of origins within this pool.

Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#origins LoadBalancerPool#origins}

---

##### `checkRegions`<sup>Optional</sup> <a name="checkRegions" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.checkRegions"></a>

- *Type:* java.util.List<java.lang.String>

A list of regions from which to run health checks. Null means every Cloudflare data center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#check_regions LoadBalancerPool#check_regions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#description LoadBalancerPool#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable (the default) or disable this pool.

Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover to the next pool (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}

---

##### `latitude`<sup>Optional</sup> <a name="latitude" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.latitude"></a>

- *Type:* java.lang.Number

The latitude of the data center containing the origins used in this pool in decimal degrees.

If this is set, longitude must also be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#latitude LoadBalancerPool#latitude}

---

##### `loadShedding`<sup>Optional</sup> <a name="loadShedding" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.loadShedding"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>

Configures load shedding policies and percentages for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#load_shedding LoadBalancerPool#load_shedding}

---

##### `longitude`<sup>Optional</sup> <a name="longitude" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.longitude"></a>

- *Type:* java.lang.Number

The longitude of the data center containing the origins used in this pool in decimal degrees.

If this is set, latitude must also be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#longitude LoadBalancerPool#longitude}

---

##### `minimumOrigins`<sup>Optional</sup> <a name="minimumOrigins" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.minimumOrigins"></a>

- *Type:* java.lang.Number

The minimum number of origins that must be healthy for this pool to serve traffic.

If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the next available pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#minimum_origins LoadBalancerPool#minimum_origins}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.monitor"></a>

- *Type:* java.lang.String

The ID of the Monitor to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#monitor LoadBalancerPool#monitor}

---

##### `monitorGroup`<sup>Optional</sup> <a name="monitorGroup" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.monitorGroup"></a>

- *Type:* java.lang.String

The ID of the Monitor Group to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#monitor_group LoadBalancerPool#monitor_group}

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.notificationEmail"></a>

- *Type:* java.lang.String

This field is now deprecated.

It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status notifications to. This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#notification_email LoadBalancerPool#notification_email}

---

##### `notificationFilter`<sup>Optional</sup> <a name="notificationFilter" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.notificationFilter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a>

Filter pool and origin health notifications by resource type or health status. Use null to reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#notification_filter LoadBalancerPool#notification_filter}

---

##### `originSteering`<sup>Optional</sup> <a name="originSteering" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.Initializer.parameter.originSteering"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>

Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#origin_steering LoadBalancerPool#origin_steering}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding">putLoadShedding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putNotificationFilter">putNotificationFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins">putOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering">putOriginSteering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetCheckRegions">resetCheckRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLatitude">resetLatitude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLoadShedding">resetLoadShedding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLongitude">resetLongitude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMinimumOrigins">resetMinimumOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitorGroup">resetMonitorGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationEmail">resetNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationFilter">resetNotificationFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOriginSteering">resetOriginSteering</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoadShedding` <a name="putLoadShedding" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding"></a>

```java
public void putLoadShedding(LoadBalancerPoolLoadShedding value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putLoadShedding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>

---

##### `putNotificationFilter` <a name="putNotificationFilter" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putNotificationFilter"></a>

```java
public void putNotificationFilter(LoadBalancerPoolNotificationFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putNotificationFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a>

---

##### `putOrigins` <a name="putOrigins" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins"></a>

```java
public void putOrigins(IResolvable|java.util.List<LoadBalancerPoolOrigins> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOrigins.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>>

---

##### `putOriginSteering` <a name="putOriginSteering" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering"></a>

```java
public void putOriginSteering(LoadBalancerPoolOriginSteering value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.putOriginSteering.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>

---

##### `resetCheckRegions` <a name="resetCheckRegions" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetCheckRegions"></a>

```java
public void resetCheckRegions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLatitude` <a name="resetLatitude" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLatitude"></a>

```java
public void resetLatitude()
```

##### `resetLoadShedding` <a name="resetLoadShedding" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLoadShedding"></a>

```java
public void resetLoadShedding()
```

##### `resetLongitude` <a name="resetLongitude" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetLongitude"></a>

```java
public void resetLongitude()
```

##### `resetMinimumOrigins` <a name="resetMinimumOrigins" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMinimumOrigins"></a>

```java
public void resetMinimumOrigins()
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitor"></a>

```java
public void resetMonitor()
```

##### `resetMonitorGroup` <a name="resetMonitorGroup" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetMonitorGroup"></a>

```java
public void resetMonitorGroup()
```

##### `resetNotificationEmail` <a name="resetNotificationEmail" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationEmail"></a>

```java
public void resetNotificationEmail()
```

##### `resetNotificationFilter` <a name="resetNotificationFilter" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetNotificationFilter"></a>

```java
public void resetNotificationFilter()
```

##### `resetOriginSteering` <a name="resetOriginSteering" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.resetOriginSteering"></a>

```java
public void resetOriginSteering()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LoadBalancerPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPool;

LoadBalancerPool.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPool;

LoadBalancerPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPool;

LoadBalancerPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPool;

LoadBalancerPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoadBalancerPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LoadBalancerPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoadBalancerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoadBalancerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LoadBalancerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.disabledAt">disabledAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadShedding">loadShedding</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference">LoadBalancerPoolLoadSheddingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.networks">networks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationFilter">notificationFilter</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference">LoadBalancerPoolNotificationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.origins">origins</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList">LoadBalancerPoolOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteering">originSteering</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference">LoadBalancerPoolOriginSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegionsInput">checkRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitudeInput">latitudeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadSheddingInput">loadSheddingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitudeInput">longitudeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOriginsInput">minimumOriginsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorGroupInput">monitorGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorInput">monitorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmailInput">notificationEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationFilterInput">notificationFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originsInput">originsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteeringInput">originSteeringInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegions">checkRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitude">latitude</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitude">longitude</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOrigins">minimumOrigins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitor">monitor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorGroup">monitorGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `disabledAt`<sup>Required</sup> <a name="disabledAt" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.disabledAt"></a>

```java
public java.lang.String getDisabledAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadShedding`<sup>Required</sup> <a name="loadShedding" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadShedding"></a>

```java
public LoadBalancerPoolLoadSheddingOutputReference getLoadShedding();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference">LoadBalancerPoolLoadSheddingOutputReference</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.networks"></a>

```java
public java.util.List<java.lang.String> getNetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notificationFilter`<sup>Required</sup> <a name="notificationFilter" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationFilter"></a>

```java
public LoadBalancerPoolNotificationFilterOutputReference getNotificationFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference">LoadBalancerPoolNotificationFilterOutputReference</a>

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.origins"></a>

```java
public LoadBalancerPoolOriginsList getOrigins();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList">LoadBalancerPoolOriginsList</a>

---

##### `originSteering`<sup>Required</sup> <a name="originSteering" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteering"></a>

```java
public LoadBalancerPoolOriginSteeringOutputReference getOriginSteering();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference">LoadBalancerPoolOriginSteeringOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `checkRegionsInput`<sup>Optional</sup> <a name="checkRegionsInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegionsInput"></a>

```java
public java.util.List<java.lang.String> getCheckRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `latitudeInput`<sup>Optional</sup> <a name="latitudeInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitudeInput"></a>

```java
public java.lang.Number getLatitudeInput();
```

- *Type:* java.lang.Number

---

##### `loadSheddingInput`<sup>Optional</sup> <a name="loadSheddingInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.loadSheddingInput"></a>

```java
public IResolvable|LoadBalancerPoolLoadShedding getLoadSheddingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>

---

##### `longitudeInput`<sup>Optional</sup> <a name="longitudeInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitudeInput"></a>

```java
public java.lang.Number getLongitudeInput();
```

- *Type:* java.lang.Number

---

##### `minimumOriginsInput`<sup>Optional</sup> <a name="minimumOriginsInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOriginsInput"></a>

```java
public java.lang.Number getMinimumOriginsInput();
```

- *Type:* java.lang.Number

---

##### `monitorGroupInput`<sup>Optional</sup> <a name="monitorGroupInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorGroupInput"></a>

```java
public java.lang.String getMonitorGroupInput();
```

- *Type:* java.lang.String

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorInput"></a>

```java
public java.lang.String getMonitorInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationEmailInput`<sup>Optional</sup> <a name="notificationEmailInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmailInput"></a>

```java
public java.lang.String getNotificationEmailInput();
```

- *Type:* java.lang.String

---

##### `notificationFilterInput`<sup>Optional</sup> <a name="notificationFilterInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationFilterInput"></a>

```java
public IResolvable|LoadBalancerPoolNotificationFilter getNotificationFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a>

---

##### `originsInput`<sup>Optional</sup> <a name="originsInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originsInput"></a>

```java
public IResolvable|java.util.List<LoadBalancerPoolOrigins> getOriginsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>>

---

##### `originSteeringInput`<sup>Optional</sup> <a name="originSteeringInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.originSteeringInput"></a>

```java
public IResolvable|LoadBalancerPoolOriginSteering getOriginSteeringInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `checkRegions`<sup>Required</sup> <a name="checkRegions" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.checkRegions"></a>

```java
public java.util.List<java.lang.String> getCheckRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.latitude"></a>

```java
public java.lang.Number getLatitude();
```

- *Type:* java.lang.Number

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.longitude"></a>

```java
public java.lang.Number getLongitude();
```

- *Type:* java.lang.Number

---

##### `minimumOrigins`<sup>Required</sup> <a name="minimumOrigins" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.minimumOrigins"></a>

```java
public java.lang.Number getMinimumOrigins();
```

- *Type:* java.lang.Number

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitor"></a>

```java
public java.lang.String getMonitor();
```

- *Type:* java.lang.String

---

##### `monitorGroup`<sup>Required</sup> <a name="monitorGroup" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.monitorGroup"></a>

```java
public java.lang.String getMonitorGroup();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.notificationEmail"></a>

```java
public java.lang.String getNotificationEmail();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerPoolConfig <a name="LoadBalancerPoolConfig" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolConfig;

LoadBalancerPoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
    .origins(IResolvable|java.util.List<LoadBalancerPoolOrigins>)
//  .checkRegions(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .latitude(java.lang.Number)
//  .loadShedding(LoadBalancerPoolLoadShedding)
//  .longitude(java.lang.Number)
//  .minimumOrigins(java.lang.Number)
//  .monitor(java.lang.String)
//  .monitorGroup(java.lang.String)
//  .notificationEmail(java.lang.String)
//  .notificationFilter(LoadBalancerPoolNotificationFilter)
//  .originSteering(LoadBalancerPoolOriginSteering)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.origins">origins</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>></code> | The list of origins within this pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.checkRegions">checkRegions</a></code> | <code>java.util.List<java.lang.String></code> | A list of regions from which to run health checks. Null means every Cloudflare data center. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable (the default) or disable this pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.latitude">latitude</a></code> | <code>java.lang.Number</code> | The latitude of the data center containing the origins used in this pool in decimal degrees. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.loadShedding">loadShedding</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a></code> | Configures load shedding policies and percentages for the pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.longitude">longitude</a></code> | <code>java.lang.Number</code> | The longitude of the data center containing the origins used in this pool in decimal degrees. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.minimumOrigins">minimumOrigins</a></code> | <code>java.lang.Number</code> | The minimum number of origins that must be healthy for this pool to serve traffic. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitor">monitor</a></code> | <code>java.lang.String</code> | The ID of the Monitor to use for checking the health of origins within this pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitorGroup">monitorGroup</a></code> | <code>java.lang.String</code> | The ID of the Monitor Group to use for checking the health of origins within this pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationEmail">notificationEmail</a></code> | <code>java.lang.String</code> | This field is now deprecated. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationFilter">notificationFilter</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a></code> | Filter pool and origin health notifications by resource type or health status. Use null to reset. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.originSteering">originSteering</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a></code> | Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#account_id LoadBalancerPool#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.origins"></a>

```java
public IResolvable|java.util.List<LoadBalancerPoolOrigins> getOrigins();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>>

The list of origins within this pool.

Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#origins LoadBalancerPool#origins}

---

##### `checkRegions`<sup>Optional</sup> <a name="checkRegions" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.checkRegions"></a>

```java
public java.util.List<java.lang.String> getCheckRegions();
```

- *Type:* java.util.List<java.lang.String>

A list of regions from which to run health checks. Null means every Cloudflare data center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#check_regions LoadBalancerPool#check_regions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#description LoadBalancerPool#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable (the default) or disable this pool.

Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover to the next pool (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}

---

##### `latitude`<sup>Optional</sup> <a name="latitude" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.latitude"></a>

```java
public java.lang.Number getLatitude();
```

- *Type:* java.lang.Number

The latitude of the data center containing the origins used in this pool in decimal degrees.

If this is set, longitude must also be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#latitude LoadBalancerPool#latitude}

---

##### `loadShedding`<sup>Optional</sup> <a name="loadShedding" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.loadShedding"></a>

```java
public LoadBalancerPoolLoadShedding getLoadShedding();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>

Configures load shedding policies and percentages for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#load_shedding LoadBalancerPool#load_shedding}

---

##### `longitude`<sup>Optional</sup> <a name="longitude" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.longitude"></a>

```java
public java.lang.Number getLongitude();
```

- *Type:* java.lang.Number

The longitude of the data center containing the origins used in this pool in decimal degrees.

If this is set, latitude must also be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#longitude LoadBalancerPool#longitude}

---

##### `minimumOrigins`<sup>Optional</sup> <a name="minimumOrigins" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.minimumOrigins"></a>

```java
public java.lang.Number getMinimumOrigins();
```

- *Type:* java.lang.Number

The minimum number of origins that must be healthy for this pool to serve traffic.

If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the next available pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#minimum_origins LoadBalancerPool#minimum_origins}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitor"></a>

```java
public java.lang.String getMonitor();
```

- *Type:* java.lang.String

The ID of the Monitor to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#monitor LoadBalancerPool#monitor}

---

##### `monitorGroup`<sup>Optional</sup> <a name="monitorGroup" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.monitorGroup"></a>

```java
public java.lang.String getMonitorGroup();
```

- *Type:* java.lang.String

The ID of the Monitor Group to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#monitor_group LoadBalancerPool#monitor_group}

---

##### `notificationEmail`<sup>Optional</sup> <a name="notificationEmail" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationEmail"></a>

```java
public java.lang.String getNotificationEmail();
```

- *Type:* java.lang.String

This field is now deprecated.

It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status notifications to. This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#notification_email LoadBalancerPool#notification_email}

---

##### `notificationFilter`<sup>Optional</sup> <a name="notificationFilter" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.notificationFilter"></a>

```java
public LoadBalancerPoolNotificationFilter getNotificationFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a>

Filter pool and origin health notifications by resource type or health status. Use null to reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#notification_filter LoadBalancerPool#notification_filter}

---

##### `originSteering`<sup>Optional</sup> <a name="originSteering" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolConfig.property.originSteering"></a>

```java
public LoadBalancerPoolOriginSteering getOriginSteering();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>

Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#origin_steering LoadBalancerPool#origin_steering}

---

### LoadBalancerPoolLoadShedding <a name="LoadBalancerPoolLoadShedding" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolLoadShedding;

LoadBalancerPoolLoadShedding.builder()
//  .defaultPercent(java.lang.Number)
//  .defaultPolicy(java.lang.String)
//  .sessionPercent(java.lang.Number)
//  .sessionPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPercent">defaultPercent</a></code> | <code>java.lang.Number</code> | The percent of traffic to shed from the pool, according to the default policy. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPolicy">defaultPolicy</a></code> | <code>java.lang.String</code> | The default policy to use when load shedding. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPercent">sessionPercent</a></code> | <code>java.lang.Number</code> | The percent of existing sessions to shed from the pool, according to the session policy. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPolicy">sessionPolicy</a></code> | <code>java.lang.String</code> | Only the hash policy is supported for existing sessions (to avoid exponential decay). Available values: "hash". |

---

##### `defaultPercent`<sup>Optional</sup> <a name="defaultPercent" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPercent"></a>

```java
public java.lang.Number getDefaultPercent();
```

- *Type:* java.lang.Number

The percent of traffic to shed from the pool, according to the default policy.

Applies to new sessions and traffic without session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#default_percent LoadBalancerPool#default_percent}

---

##### `defaultPolicy`<sup>Optional</sup> <a name="defaultPolicy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.defaultPolicy"></a>

```java
public java.lang.String getDefaultPolicy();
```

- *Type:* java.lang.String

The default policy to use when load shedding.

A random policy randomly sheds a given percent of requests. A hash policy computes a hash over the CF-Connecting-IP address and sheds all requests originating from a percent of IPs.
Available values: "random", "hash".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#default_policy LoadBalancerPool#default_policy}

---

##### `sessionPercent`<sup>Optional</sup> <a name="sessionPercent" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPercent"></a>

```java
public java.lang.Number getSessionPercent();
```

- *Type:* java.lang.Number

The percent of existing sessions to shed from the pool, according to the session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#session_percent LoadBalancerPool#session_percent}

---

##### `sessionPolicy`<sup>Optional</sup> <a name="sessionPolicy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding.property.sessionPolicy"></a>

```java
public java.lang.String getSessionPolicy();
```

- *Type:* java.lang.String

Only the hash policy is supported for existing sessions (to avoid exponential decay). Available values: "hash".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#session_policy LoadBalancerPool#session_policy}

---

### LoadBalancerPoolNotificationFilter <a name="LoadBalancerPoolNotificationFilter" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolNotificationFilter;

LoadBalancerPoolNotificationFilter.builder()
//  .origin(LoadBalancerPoolNotificationFilterOrigin)
//  .pool(LoadBalancerPoolNotificationFilterPool)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.property.origin">origin</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a></code> | Filter options for a particular resource type (pool or origin). Use null to reset. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.property.pool">pool</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a></code> | Filter options for a particular resource type (pool or origin). Use null to reset. |

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.property.origin"></a>

```java
public LoadBalancerPoolNotificationFilterOrigin getOrigin();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a>

Filter options for a particular resource type (pool or origin). Use null to reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#origin LoadBalancerPool#origin}

---

##### `pool`<sup>Optional</sup> <a name="pool" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter.property.pool"></a>

```java
public LoadBalancerPoolNotificationFilterPool getPool();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a>

Filter options for a particular resource type (pool or origin). Use null to reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#pool LoadBalancerPool#pool}

---

### LoadBalancerPoolNotificationFilterOrigin <a name="LoadBalancerPoolNotificationFilterOrigin" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolNotificationFilterOrigin;

LoadBalancerPoolNotificationFilterOrigin.builder()
//  .disable(java.lang.Boolean|IResolvable)
//  .healthy(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.property.disable">disable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set true, disable notifications for this type of resource (pool or origin). |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.property.healthy">healthy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events). |

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.property.disable"></a>

```java
public java.lang.Boolean|IResolvable getDisable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set true, disable notifications for this type of resource (pool or origin).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#disable LoadBalancerPool#disable}

---

##### `healthy`<sup>Optional</sup> <a name="healthy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin.property.healthy"></a>

```java
public java.lang.Boolean|IResolvable getHealthy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#healthy LoadBalancerPool#healthy}

---

### LoadBalancerPoolNotificationFilterPool <a name="LoadBalancerPoolNotificationFilterPool" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolNotificationFilterPool;

LoadBalancerPoolNotificationFilterPool.builder()
//  .disable(java.lang.Boolean|IResolvable)
//  .healthy(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.property.disable">disable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set true, disable notifications for this type of resource (pool or origin). |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.property.healthy">healthy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events). |

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.property.disable"></a>

```java
public java.lang.Boolean|IResolvable getDisable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set true, disable notifications for this type of resource (pool or origin).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#disable LoadBalancerPool#disable}

---

##### `healthy`<sup>Optional</sup> <a name="healthy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool.property.healthy"></a>

```java
public java.lang.Boolean|IResolvable getHealthy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#healthy LoadBalancerPool#healthy}

---

### LoadBalancerPoolOrigins <a name="LoadBalancerPoolOrigins" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolOrigins;

LoadBalancerPoolOrigins.builder()
//  .address(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .flattenCname(java.lang.Boolean|IResolvable)
//  .header(LoadBalancerPoolOriginsHeader)
//  .name(java.lang.String)
//  .port(java.lang.Number)
//  .virtualNetworkId(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.address">address</a></code> | <code>java.lang.String</code> | The IP address (IPv4 or IPv6) of the origin, or its publicly addressable hostname. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable (the default) this origin within the pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.flattenCname">flattenCname</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to flatten CNAME records for this origin, resolving them to A/AAAA records before returning to the client. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.header">header</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a></code> | The request header is used to pass additional information with an HTTP request. Currently supported header is 'Host'. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.name">name</a></code> | <code>java.lang.String</code> | A human-identifiable name for the origin. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.port">port</a></code> | <code>java.lang.Number</code> | The port for upstream connections. A value of 0 means the default port for the protocol will be used. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The virtual network subnet ID the origin belongs in. Virtual network must also belong to the account. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.weight">weight</a></code> | <code>java.lang.Number</code> | The weight of this origin relative to other origins in the pool. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The IP address (IPv4 or IPv6) of the origin, or its publicly addressable hostname.

Hostnames entered here should resolve directly to the origin, and not be a hostname proxied by Cloudflare. To set an internal/reserved address, virtual_network_id must also be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#address LoadBalancerPool#address}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable (the default) this origin within the pool.

Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#enabled LoadBalancerPool#enabled}

---

##### `flattenCname`<sup>Optional</sup> <a name="flattenCname" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.flattenCname"></a>

```java
public java.lang.Boolean|IResolvable getFlattenCname();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to flatten CNAME records for this origin, resolving them to A/AAAA records before returning to the client.

When true (the default), the director resolves CNAME addresses to their underlying A/AAAA records. When false, the origin address is returned as a raw CNAME record without resolution. This setting mirrors the DNS API record flatten_cname setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#flatten_cname LoadBalancerPool#flatten_cname}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.header"></a>

```java
public LoadBalancerPoolOriginsHeader getHeader();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>

The request header is used to pass additional information with an HTTP request. Currently supported header is 'Host'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#header LoadBalancerPool#header}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-identifiable name for the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#name LoadBalancerPool#name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port for upstream connections. A value of 0 means the default port for the protocol will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#port LoadBalancerPool#port}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

The virtual network subnet ID the origin belongs in. Virtual network must also belong to the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#virtual_network_id LoadBalancerPool#virtual_network_id}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

The weight of this origin relative to other origins in the pool.

Based on the configured weight the total traffic is distributed among origins within the pool.

* `origin_steering.policy="least_outstanding_requests"`: Use weight to scale the origin's outstanding requests.
* `origin_steering.policy="least_connections"`: Use weight to scale the origin's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#weight LoadBalancerPool#weight}

---

### LoadBalancerPoolOriginsHeader <a name="LoadBalancerPoolOriginsHeader" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolOriginsHeader;

LoadBalancerPoolOriginsHeader.builder()
//  .host(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.host">host</a></code> | <code>java.util.List<java.lang.String></code> | The 'Host' header allows to override the hostname set in the HTTP request. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader.property.host"></a>

```java
public java.util.List<java.lang.String> getHost();
```

- *Type:* java.util.List<java.lang.String>

The 'Host' header allows to override the hostname set in the HTTP request.

Current support is 1 'Host' header override per origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#host LoadBalancerPool#host}

---

### LoadBalancerPoolOriginSteering <a name="LoadBalancerPoolOriginSteering" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolOriginSteering;

LoadBalancerPoolOriginSteering.builder()
//  .policy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.property.policy">policy</a></code> | <code>java.lang.String</code> | The type of origin steering policy to use. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

The type of origin steering policy to use.

* `"random"`: Select an origin randomly.
* `"hash"`: Select an origin by computing a hash over the CF-Connecting-IP address.
* `"least_outstanding_requests"`: Select an origin by taking into consideration origin weights, as well as each origin's number of outstanding requests. Origins with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select an origin by taking into consideration origin weights, as well as each origin's number of open connections. Origins with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
  Available values: "random", "hash", "least_outstanding_requests", "least_connections".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/load_balancer_pool#policy LoadBalancerPool#policy}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerPoolLoadSheddingOutputReference <a name="LoadBalancerPoolLoadSheddingOutputReference" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolLoadSheddingOutputReference;

new LoadBalancerPoolLoadSheddingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPercent">resetDefaultPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPolicy">resetDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPercent">resetSessionPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPolicy">resetSessionPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultPercent` <a name="resetDefaultPercent" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPercent"></a>

```java
public void resetDefaultPercent()
```

##### `resetDefaultPolicy` <a name="resetDefaultPolicy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetDefaultPolicy"></a>

```java
public void resetDefaultPolicy()
```

##### `resetSessionPercent` <a name="resetSessionPercent" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPercent"></a>

```java
public void resetSessionPercent()
```

##### `resetSessionPolicy` <a name="resetSessionPolicy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.resetSessionPolicy"></a>

```java
public void resetSessionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercentInput">defaultPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicyInput">defaultPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercentInput">sessionPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicyInput">sessionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent">defaultPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy">defaultPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent">sessionPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy">sessionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPercentInput`<sup>Optional</sup> <a name="defaultPercentInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercentInput"></a>

```java
public java.lang.Number getDefaultPercentInput();
```

- *Type:* java.lang.Number

---

##### `defaultPolicyInput`<sup>Optional</sup> <a name="defaultPolicyInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicyInput"></a>

```java
public java.lang.String getDefaultPolicyInput();
```

- *Type:* java.lang.String

---

##### `sessionPercentInput`<sup>Optional</sup> <a name="sessionPercentInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercentInput"></a>

```java
public java.lang.Number getSessionPercentInput();
```

- *Type:* java.lang.Number

---

##### `sessionPolicyInput`<sup>Optional</sup> <a name="sessionPolicyInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicyInput"></a>

```java
public java.lang.String getSessionPolicyInput();
```

- *Type:* java.lang.String

---

##### `defaultPercent`<sup>Required</sup> <a name="defaultPercent" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent"></a>

```java
public java.lang.Number getDefaultPercent();
```

- *Type:* java.lang.Number

---

##### `defaultPolicy`<sup>Required</sup> <a name="defaultPolicy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy"></a>

```java
public java.lang.String getDefaultPolicy();
```

- *Type:* java.lang.String

---

##### `sessionPercent`<sup>Required</sup> <a name="sessionPercent" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent"></a>

```java
public java.lang.Number getSessionPercent();
```

- *Type:* java.lang.Number

---

##### `sessionPolicy`<sup>Required</sup> <a name="sessionPolicy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy"></a>

```java
public java.lang.String getSessionPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadSheddingOutputReference.property.internalValue"></a>

```java
public IResolvable|LoadBalancerPoolLoadShedding getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolLoadShedding">LoadBalancerPoolLoadShedding</a>

---


### LoadBalancerPoolNotificationFilterOriginOutputReference <a name="LoadBalancerPoolNotificationFilterOriginOutputReference" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolNotificationFilterOriginOutputReference;

new LoadBalancerPoolNotificationFilterOriginOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resetDisable">resetDisable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resetHealthy">resetHealthy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisable` <a name="resetDisable" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resetDisable"></a>

```java
public void resetDisable()
```

##### `resetHealthy` <a name="resetHealthy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.resetHealthy"></a>

```java
public void resetHealthy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.disableInput">disableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.healthyInput">healthyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.disable">disable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.healthy">healthy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.disableInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `healthyInput`<sup>Optional</sup> <a name="healthyInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.healthyInput"></a>

```java
public java.lang.Boolean|IResolvable getHealthyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.disable"></a>

```java
public java.lang.Boolean|IResolvable getDisable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.healthy"></a>

```java
public java.lang.Boolean|IResolvable getHealthy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference.property.internalValue"></a>

```java
public IResolvable|LoadBalancerPoolNotificationFilterOrigin getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a>

---


### LoadBalancerPoolNotificationFilterOutputReference <a name="LoadBalancerPoolNotificationFilterOutputReference" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolNotificationFilterOutputReference;

new LoadBalancerPoolNotificationFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putOrigin">putOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putPool">putPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resetPool">resetPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOrigin` <a name="putOrigin" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putOrigin"></a>

```java
public void putOrigin(LoadBalancerPoolNotificationFilterOrigin value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a>

---

##### `putPool` <a name="putPool" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putPool"></a>

```java
public void putPool(LoadBalancerPoolNotificationFilterPool value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.putPool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a>

---

##### `resetOrigin` <a name="resetOrigin" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resetOrigin"></a>

```java
public void resetOrigin()
```

##### `resetPool` <a name="resetPool" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.resetPool"></a>

```java
public void resetPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.origin">origin</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference">LoadBalancerPoolNotificationFilterOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.pool">pool</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference">LoadBalancerPoolNotificationFilterPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.originInput">originInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.poolInput">poolInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.origin"></a>

```java
public LoadBalancerPoolNotificationFilterOriginOutputReference getOrigin();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOriginOutputReference">LoadBalancerPoolNotificationFilterOriginOutputReference</a>

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.pool"></a>

```java
public LoadBalancerPoolNotificationFilterPoolOutputReference getPool();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference">LoadBalancerPoolNotificationFilterPoolOutputReference</a>

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.originInput"></a>

```java
public IResolvable|LoadBalancerPoolNotificationFilterOrigin getOriginInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOrigin">LoadBalancerPoolNotificationFilterOrigin</a>

---

##### `poolInput`<sup>Optional</sup> <a name="poolInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.poolInput"></a>

```java
public IResolvable|LoadBalancerPoolNotificationFilterPool getPoolInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|LoadBalancerPoolNotificationFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilter">LoadBalancerPoolNotificationFilter</a>

---


### LoadBalancerPoolNotificationFilterPoolOutputReference <a name="LoadBalancerPoolNotificationFilterPoolOutputReference" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolNotificationFilterPoolOutputReference;

new LoadBalancerPoolNotificationFilterPoolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resetDisable">resetDisable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resetHealthy">resetHealthy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisable` <a name="resetDisable" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resetDisable"></a>

```java
public void resetDisable()
```

##### `resetHealthy` <a name="resetHealthy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.resetHealthy"></a>

```java
public void resetHealthy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.disableInput">disableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.healthyInput">healthyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.disable">disable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.healthy">healthy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.disableInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `healthyInput`<sup>Optional</sup> <a name="healthyInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.healthyInput"></a>

```java
public java.lang.Boolean|IResolvable getHealthyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.disable"></a>

```java
public java.lang.Boolean|IResolvable getDisable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.healthy"></a>

```java
public java.lang.Boolean|IResolvable getHealthy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPoolOutputReference.property.internalValue"></a>

```java
public IResolvable|LoadBalancerPoolNotificationFilterPool getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolNotificationFilterPool">LoadBalancerPoolNotificationFilterPool</a>

---


### LoadBalancerPoolOriginsHeaderOutputReference <a name="LoadBalancerPoolOriginsHeaderOutputReference" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolOriginsHeaderOutputReference;

new LoadBalancerPoolOriginsHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.resetHost"></a>

```java
public void resetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.hostInput">hostInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.host">host</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.hostInput"></a>

```java
public java.util.List<java.lang.String> getHostInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.host"></a>

```java
public java.util.List<java.lang.String> getHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference.property.internalValue"></a>

```java
public IResolvable|LoadBalancerPoolOriginsHeader getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>

---


### LoadBalancerPoolOriginsList <a name="LoadBalancerPoolOriginsList" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolOriginsList;

new LoadBalancerPoolOriginsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get"></a>

```java
public LoadBalancerPoolOriginsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LoadBalancerPoolOrigins> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>>

---


### LoadBalancerPoolOriginsOutputReference <a name="LoadBalancerPoolOriginsOutputReference" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolOriginsOutputReference;

new LoadBalancerPoolOriginsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetFlattenCname">resetFlattenCname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader"></a>

```java
public void putHeader(LoadBalancerPoolOriginsHeader value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>

---

##### `resetAddress` <a name="resetAddress" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFlattenCname` <a name="resetFlattenCname" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetFlattenCname"></a>

```java
public void resetFlattenCname()
```

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.disabledAt">disabledAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference">LoadBalancerPoolOriginsHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.flattenCnameInput">flattenCnameInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.headerInput">headerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.flattenCname">flattenCname</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledAt`<sup>Required</sup> <a name="disabledAt" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.disabledAt"></a>

```java
public java.lang.String getDisabledAt();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.header"></a>

```java
public LoadBalancerPoolOriginsHeaderOutputReference getHeader();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeaderOutputReference">LoadBalancerPoolOriginsHeaderOutputReference</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `flattenCnameInput`<sup>Optional</sup> <a name="flattenCnameInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.flattenCnameInput"></a>

```java
public java.lang.Boolean|IResolvable getFlattenCnameInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.headerInput"></a>

```java
public IResolvable|LoadBalancerPoolOriginsHeader getHeaderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsHeader">LoadBalancerPoolOriginsHeader</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `flattenCname`<sup>Required</sup> <a name="flattenCname" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.flattenCname"></a>

```java
public java.lang.Boolean|IResolvable getFlattenCname();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginsOutputReference.property.internalValue"></a>

```java
public IResolvable|LoadBalancerPoolOrigins getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOrigins">LoadBalancerPoolOrigins</a>

---


### LoadBalancerPoolOriginSteeringOutputReference <a name="LoadBalancerPoolOriginSteeringOutputReference" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_pool.LoadBalancerPoolOriginSteeringOutputReference;

new LoadBalancerPoolOriginSteeringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.resetPolicy"></a>

```java
public void resetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteeringOutputReference.property.internalValue"></a>

```java
public IResolvable|LoadBalancerPoolOriginSteering getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerPool.LoadBalancerPoolOriginSteering">LoadBalancerPoolOriginSteering</a>

---



