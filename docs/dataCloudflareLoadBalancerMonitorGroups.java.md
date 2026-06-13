# `dataCloudflareLoadBalancerMonitorGroups` Submodule <a name="`dataCloudflareLoadBalancerMonitorGroups` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLoadBalancerMonitorGroups <a name="DataCloudflareLoadBalancerMonitorGroups" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/load_balancer_monitor_groups cloudflare_load_balancer_monitor_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_groups.DataCloudflareLoadBalancerMonitorGroups;

DataCloudflareLoadBalancerMonitorGroups.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/load_balancer_monitor_groups#account_id DataCloudflareLoadBalancerMonitorGroups#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/load_balancer_monitor_groups#max_items DataCloudflareLoadBalancerMonitorGroups#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.resetMaxItems"></a>

```java
public void resetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareLoadBalancerMonitorGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_groups.DataCloudflareLoadBalancerMonitorGroups;

DataCloudflareLoadBalancerMonitorGroups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_groups.DataCloudflareLoadBalancerMonitorGroups;

DataCloudflareLoadBalancerMonitorGroups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_groups.DataCloudflareLoadBalancerMonitorGroups;

DataCloudflareLoadBalancerMonitorGroups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_groups.DataCloudflareLoadBalancerMonitorGroups;

DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareLoadBalancerMonitorGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareLoadBalancerMonitorGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareLoadBalancerMonitorGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/load_balancer_monitor_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareLoadBalancerMonitorGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList">DataCloudflareLoadBalancerMonitorGroupsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.result"></a>

```java
public DataCloudflareLoadBalancerMonitorGroupsResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList">DataCloudflareLoadBalancerMonitorGroupsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLoadBalancerMonitorGroupsConfig <a name="DataCloudflareLoadBalancerMonitorGroupsConfig" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_groups.DataCloudflareLoadBalancerMonitorGroupsConfig;

DataCloudflareLoadBalancerMonitorGroupsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/load_balancer_monitor_groups#account_id DataCloudflareLoadBalancerMonitorGroups#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/load_balancer_monitor_groups#max_items DataCloudflareLoadBalancerMonitorGroups#max_items}

---

### DataCloudflareLoadBalancerMonitorGroupsResult <a name="DataCloudflareLoadBalancerMonitorGroupsResult" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_groups.DataCloudflareLoadBalancerMonitorGroupsResult;

DataCloudflareLoadBalancerMonitorGroupsResult.builder()
    .build();
```


### DataCloudflareLoadBalancerMonitorGroupsResultMembers <a name="DataCloudflareLoadBalancerMonitorGroupsResultMembers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembers.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_groups.DataCloudflareLoadBalancerMonitorGroupsResultMembers;

DataCloudflareLoadBalancerMonitorGroupsResultMembers.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLoadBalancerMonitorGroupsResultList <a name="DataCloudflareLoadBalancerMonitorGroupsResultList" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_groups.DataCloudflareLoadBalancerMonitorGroupsResultList;

new DataCloudflareLoadBalancerMonitorGroupsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.get"></a>

```java
public DataCloudflareLoadBalancerMonitorGroupsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareLoadBalancerMonitorGroupsResultMembersList <a name="DataCloudflareLoadBalancerMonitorGroupsResultMembersList" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_groups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList;

new DataCloudflareLoadBalancerMonitorGroupsResultMembersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.get"></a>

```java
public DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference <a name="DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_groups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference;

new DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.monitoringOnly">monitoringOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.mustBeHealthy">mustBeHealthy</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembers">DataCloudflareLoadBalancerMonitorGroupsResultMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

---

##### `monitoringOnly`<sup>Required</sup> <a name="monitoringOnly" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.monitoringOnly"></a>

```java
public IResolvable getMonitoringOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `mustBeHealthy`<sup>Required</sup> <a name="mustBeHealthy" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.mustBeHealthy"></a>

```java
public IResolvable getMustBeHealthy();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersOutputReference.property.internalValue"></a>

```java
public DataCloudflareLoadBalancerMonitorGroupsResultMembers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembers">DataCloudflareLoadBalancerMonitorGroupsResultMembers</a>

---


### DataCloudflareLoadBalancerMonitorGroupsResultOutputReference <a name="DataCloudflareLoadBalancerMonitorGroupsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_groups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference;

new DataCloudflareLoadBalancerMonitorGroupsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.members">members</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList">DataCloudflareLoadBalancerMonitorGroupsResultMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResult">DataCloudflareLoadBalancerMonitorGroupsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.members"></a>

```java
public DataCloudflareLoadBalancerMonitorGroupsResultMembersList getMembers();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultMembersList">DataCloudflareLoadBalancerMonitorGroupsResultMembersList</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareLoadBalancerMonitorGroupsResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroups.DataCloudflareLoadBalancerMonitorGroupsResult">DataCloudflareLoadBalancerMonitorGroupsResult</a>

---



