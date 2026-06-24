# `dataCloudflareMagicWanStaticRoute` Submodule <a name="`dataCloudflareMagicWanStaticRoute` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicWanStaticRoute <a name="DataCloudflareMagicWanStaticRoute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_wan_static_route cloudflare_magic_wan_static_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_wan_static_route.DataCloudflareMagicWanStaticRoute;

DataCloudflareMagicWanStaticRoute.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .routeId(java.lang.String)
//  .accountId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.routeId">routeId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.routeId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_wan_static_route#route_id DataCloudflareMagicWanStaticRoute#route_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_wan_static_route#account_id DataCloudflareMagicWanStaticRoute#account_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.resetAccountId"></a>

```java
public void resetAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareMagicWanStaticRoute resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_wan_static_route.DataCloudflareMagicWanStaticRoute;

DataCloudflareMagicWanStaticRoute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_wan_static_route.DataCloudflareMagicWanStaticRoute;

DataCloudflareMagicWanStaticRoute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_wan_static_route.DataCloudflareMagicWanStaticRoute;

DataCloudflareMagicWanStaticRoute.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_wan_static_route.DataCloudflareMagicWanStaticRoute;

DataCloudflareMagicWanStaticRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareMagicWanStaticRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareMagicWanStaticRoute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareMagicWanStaticRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareMagicWanStaticRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_wan_static_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicWanStaticRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.route">route</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference">DataCloudflareMagicWanStaticRouteRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.routeIdInput">routeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.routeId">routeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.route"></a>

```java
public DataCloudflareMagicWanStaticRouteRouteOutputReference getRoute();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference">DataCloudflareMagicWanStaticRouteRouteOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `routeIdInput`<sup>Optional</sup> <a name="routeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.routeIdInput"></a>

```java
public java.lang.String getRouteIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.routeId"></a>

```java
public java.lang.String getRouteId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicWanStaticRouteConfig <a name="DataCloudflareMagicWanStaticRouteConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_wan_static_route.DataCloudflareMagicWanStaticRouteConfig;

DataCloudflareMagicWanStaticRouteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .routeId(java.lang.String)
//  .accountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.routeId">routeId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.routeId"></a>

```java
public java.lang.String getRouteId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_wan_static_route#route_id DataCloudflareMagicWanStaticRoute#route_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_wan_static_route#account_id DataCloudflareMagicWanStaticRoute#account_id}

---

### DataCloudflareMagicWanStaticRouteRoute <a name="DataCloudflareMagicWanStaticRouteRoute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRoute.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_wan_static_route.DataCloudflareMagicWanStaticRouteRoute;

DataCloudflareMagicWanStaticRouteRoute.builder()
    .build();
```


### DataCloudflareMagicWanStaticRouteRouteScope <a name="DataCloudflareMagicWanStaticRouteRouteScope" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScope.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_wan_static_route.DataCloudflareMagicWanStaticRouteRouteScope;

DataCloudflareMagicWanStaticRouteRouteScope.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicWanStaticRouteRouteOutputReference <a name="DataCloudflareMagicWanStaticRouteRouteOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_wan_static_route.DataCloudflareMagicWanStaticRouteRouteOutputReference;

new DataCloudflareMagicWanStaticRouteRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.nexthop">nexthop</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference">DataCloudflareMagicWanStaticRouteRouteScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRoute">DataCloudflareMagicWanStaticRouteRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.nexthop"></a>

```java
public java.lang.String getNexthop();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.scope"></a>

```java
public DataCloudflareMagicWanStaticRouteRouteScopeOutputReference getScope();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference">DataCloudflareMagicWanStaticRouteRouteScopeOutputReference</a>

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicWanStaticRouteRoute getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRoute">DataCloudflareMagicWanStaticRouteRoute</a>

---


### DataCloudflareMagicWanStaticRouteRouteScopeOutputReference <a name="DataCloudflareMagicWanStaticRouteRouteScopeOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_wan_static_route.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference;

new DataCloudflareMagicWanStaticRouteRouteScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.coloNames">coloNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.coloRegions">coloRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScope">DataCloudflareMagicWanStaticRouteRouteScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coloNames`<sup>Required</sup> <a name="coloNames" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.coloNames"></a>

```java
public java.util.List<java.lang.String> getColoNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `coloRegions`<sup>Required</sup> <a name="coloRegions" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.coloRegions"></a>

```java
public java.util.List<java.lang.String> getColoRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicWanStaticRouteRouteScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScope">DataCloudflareMagicWanStaticRouteRouteScope</a>

---



