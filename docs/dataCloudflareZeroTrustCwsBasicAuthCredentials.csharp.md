# `dataCloudflareZeroTrustCwsBasicAuthCredentials` Submodule <a name="`dataCloudflareZeroTrustCwsBasicAuthCredentials` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsBasicAuthCredentials <a name="DataCloudflareZeroTrustCwsBasicAuthCredentials" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credentials cloudflare_zero_trust_cws_basic_auth_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsBasicAuthCredentials(Construct Scope, string Id, DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig">DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig">DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.resetDeploymentId"></a>

```csharp
private void ResetDeploymentId()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsBasicAuthCredentials resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsBasicAuthCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsBasicAuthCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsBasicAuthCredentials.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsBasicAuthCredentials.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsBasicAuthCredentials resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsBasicAuthCredentials to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCwsBasicAuthCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credentials#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsBasicAuthCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList">DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.result"></a>

```csharp
public DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList">DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig <a name="DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string DeploymentId = null,
    string Direction = null,
    double MaxItems = null,
    string Order = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Filter to credentials attached to this deployment. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.direction">Direction</a></code> | <code>string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.order">Order</a></code> | <code>string</code> | Field to order results by (default: created_at) Available values: "username", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.username">Username</a></code> | <code>string</code> | Filter by username (case-insensitive substring match). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credentials#account_id DataCloudflareZeroTrustCwsBasicAuthCredentials#account_id}

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Filter to credentials attached to this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credentials#deployment_id DataCloudflareZeroTrustCwsBasicAuthCredentials#deployment_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credentials#direction DataCloudflareZeroTrustCwsBasicAuthCredentials#direction}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credentials#max_items DataCloudflareZeroTrustCwsBasicAuthCredentials#max_items}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to order results by (default: created_at) Available values: "username", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credentials#order DataCloudflareZeroTrustCwsBasicAuthCredentials#order}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Filter by username (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_credentials#username DataCloudflareZeroTrustCwsBasicAuthCredentials#username}

---

### DataCloudflareZeroTrustCwsBasicAuthCredentialsResult <a name="DataCloudflareZeroTrustCwsBasicAuthCredentialsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsBasicAuthCredentialsResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList <a name="DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.get"></a>

```csharp
private DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference <a name="DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResult">DataCloudflareZeroTrustCwsBasicAuthCredentialsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustCwsBasicAuthCredentialsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthCredentials.DataCloudflareZeroTrustCwsBasicAuthCredentialsResult">DataCloudflareZeroTrustCwsBasicAuthCredentialsResult</a>

---



