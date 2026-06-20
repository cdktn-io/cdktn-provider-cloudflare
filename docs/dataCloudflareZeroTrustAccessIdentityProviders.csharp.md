# `dataCloudflareZeroTrustAccessIdentityProviders` Submodule <a name="`dataCloudflareZeroTrustAccessIdentityProviders` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessIdentityProviders <a name="DataCloudflareZeroTrustAccessIdentityProviders" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_identity_providers cloudflare_zero_trust_access_identity_providers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProviders(Construct Scope, string Id, DataCloudflareZeroTrustAccessIdentityProvidersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig">DataCloudflareZeroTrustAccessIdentityProvidersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig">DataCloudflareZeroTrustAccessIdentityProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetScimEnabled">ResetScimEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetScimEnabled` <a name="ResetScimEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetScimEnabled"></a>

```csharp
private void ResetScimEnabled()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustAccessIdentityProviders resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustAccessIdentityProviders.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustAccessIdentityProviders.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustAccessIdentityProviders.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustAccessIdentityProviders.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustAccessIdentityProviders resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustAccessIdentityProviders to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustAccessIdentityProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_identity_providers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessIdentityProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList">DataCloudflareZeroTrustAccessIdentityProvidersResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.scimEnabledInput">ScimEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.scimEnabled">ScimEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.result"></a>

```csharp
public DataCloudflareZeroTrustAccessIdentityProvidersResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList">DataCloudflareZeroTrustAccessIdentityProvidersResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `ScimEnabledInput`<sup>Optional</sup> <a name="ScimEnabledInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.scimEnabledInput"></a>

```csharp
public string ScimEnabledInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `ScimEnabled`<sup>Required</sup> <a name="ScimEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.scimEnabled"></a>

```csharp
public string ScimEnabled { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProviders.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessIdentityProvidersConfig <a name="DataCloudflareZeroTrustAccessIdentityProvidersConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    double MaxItems = null,
    string ScimEnabled = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.scimEnabled">ScimEnabled</a></code> | <code>string</code> | Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_identity_providers#account_id DataCloudflareZeroTrustAccessIdentityProviders#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_identity_providers#max_items DataCloudflareZeroTrustAccessIdentityProviders#max_items}

---

##### `ScimEnabled`<sup>Optional</sup> <a name="ScimEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.scimEnabled"></a>

```csharp
public string ScimEnabled { get; set; }
```

- *Type:* string

Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_identity_providers#scim_enabled DataCloudflareZeroTrustAccessIdentityProviders#scim_enabled}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_access_identity_providers#zone_id DataCloudflareZeroTrustAccessIdentityProviders#zone_id}

---

### DataCloudflareZeroTrustAccessIdentityProvidersResult <a name="DataCloudflareZeroTrustAccessIdentityProvidersResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResult {

};
```


### DataCloudflareZeroTrustAccessIdentityProvidersResultConfig <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultConfig {

};
```


### DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes {

};
```


### DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSet <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSet {

};
```


### DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificate <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificate" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificate {

};
```


### DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.get"></a>

```csharp
private DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes</a>

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.appsDomain">AppsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.attributes">Attributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.authorizationServerId">AuthorizationServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.authUrl">AuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.centrifyAccount">CentrifyAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.centrifyAppId">CentrifyAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.certsUrl">CertsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.claims">Claims</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.conditionalAccessEnabled">ConditionalAccessEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.emailAttributeName">EmailAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.emailClaimName">EmailClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.headerAttributes">HeaderAttributes</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.idpPublicCerts">IdpPublicCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.oktaAccount">OktaAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.oneloginAccount">OneloginAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.pingEnvId">PingEnvId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.pkceEnabled">PkceEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.prompt">Prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.restrictToAccountMembers">RestrictToAccountMembers</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.signRequest">SignRequest</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.ssoTargetUrl">SsoTargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.supportGroups">SupportGroups</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig">DataCloudflareZeroTrustAccessIdentityProvidersResultConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppsDomain`<sup>Required</sup> <a name="AppsDomain" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.appsDomain"></a>

```csharp
public string AppsDomain { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.attributes"></a>

```csharp
public string[] Attributes { get; }
```

- *Type:* string[]

---

##### `AuthorizationServerId`<sup>Required</sup> <a name="AuthorizationServerId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.authorizationServerId"></a>

```csharp
public string AuthorizationServerId { get; }
```

- *Type:* string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.authUrl"></a>

```csharp
public string AuthUrl { get; }
```

- *Type:* string

---

##### `CentrifyAccount`<sup>Required</sup> <a name="CentrifyAccount" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.centrifyAccount"></a>

```csharp
public string CentrifyAccount { get; }
```

- *Type:* string

---

##### `CentrifyAppId`<sup>Required</sup> <a name="CentrifyAppId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.centrifyAppId"></a>

```csharp
public string CentrifyAppId { get; }
```

- *Type:* string

---

##### `CertsUrl`<sup>Required</sup> <a name="CertsUrl" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.certsUrl"></a>

```csharp
public string CertsUrl { get; }
```

- *Type:* string

---

##### `Claims`<sup>Required</sup> <a name="Claims" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.claims"></a>

```csharp
public string[] Claims { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ConditionalAccessEnabled`<sup>Required</sup> <a name="ConditionalAccessEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.conditionalAccessEnabled"></a>

```csharp
public IResolvable ConditionalAccessEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `EmailAttributeName`<sup>Required</sup> <a name="EmailAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.emailAttributeName"></a>

```csharp
public string EmailAttributeName { get; }
```

- *Type:* string

---

##### `EmailClaimName`<sup>Required</sup> <a name="EmailClaimName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.emailClaimName"></a>

```csharp
public string EmailClaimName { get; }
```

- *Type:* string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.enableEncryption"></a>

```csharp
public IResolvable EnableEncryption { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `HeaderAttributes`<sup>Required</sup> <a name="HeaderAttributes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.headerAttributes"></a>

```csharp
public DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList HeaderAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList</a>

---

##### `IdpPublicCerts`<sup>Required</sup> <a name="IdpPublicCerts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.idpPublicCerts"></a>

```csharp
public string[] IdpPublicCerts { get; }
```

- *Type:* string[]

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `OktaAccount`<sup>Required</sup> <a name="OktaAccount" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.oktaAccount"></a>

```csharp
public string OktaAccount { get; }
```

- *Type:* string

---

##### `OneloginAccount`<sup>Required</sup> <a name="OneloginAccount" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.oneloginAccount"></a>

```csharp
public string OneloginAccount { get; }
```

- *Type:* string

---

##### `PingEnvId`<sup>Required</sup> <a name="PingEnvId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.pingEnvId"></a>

```csharp
public string PingEnvId { get; }
```

- *Type:* string

---

##### `PkceEnabled`<sup>Required</sup> <a name="PkceEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.pkceEnabled"></a>

```csharp
public IResolvable PkceEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.prompt"></a>

```csharp
public string Prompt { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `RestrictToAccountMembers`<sup>Required</sup> <a name="RestrictToAccountMembers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.restrictToAccountMembers"></a>

```csharp
public IResolvable RestrictToAccountMembers { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SignRequest`<sup>Required</sup> <a name="SignRequest" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.signRequest"></a>

```csharp
public IResolvable SignRequest { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SsoTargetUrl`<sup>Required</sup> <a name="SsoTargetUrl" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.ssoTargetUrl"></a>

```csharp
public string SsoTargetUrl { get; }
```

- *Type:* string

---

##### `SupportGroups`<sup>Required</sup> <a name="SupportGroups" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.supportGroups"></a>

```csharp
public IResolvable SupportGroups { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustAccessIdentityProvidersResultConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfig">DataCloudflareZeroTrustAccessIdentityProvidersResultConfig</a>

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultList <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.get"></a>

```csharp
private DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.readOnly">ReadOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.samlCertificateSet">SamlCertificateSet</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.samlCertificateSetId">SamlCertificateSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult">DataCloudflareZeroTrustAccessIdentityProvidersResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.config"></a>

```csharp
public DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.readOnly"></a>

```csharp
public IResolvable ReadOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SamlCertificateSet`<sup>Required</sup> <a name="SamlCertificateSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.samlCertificateSet"></a>

```csharp
public DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference SamlCertificateSet { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference</a>

---

##### `SamlCertificateSetId`<sup>Required</sup> <a name="SamlCertificateSetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.samlCertificateSetId"></a>

```csharp
public string SamlCertificateSetId { get; }
```

- *Type:* string

---

##### `ScimConfig`<sup>Required</sup> <a name="ScimConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.scimConfig"></a>

```csharp
public DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference ScimConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustAccessIdentityProvidersResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResult">DataCloudflareZeroTrustAccessIdentityProvidersResult</a>

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.isCurrent">IsCurrent</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.notAfter">NotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.publicCertificate">PublicCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificate">DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsCurrent`<sup>Required</sup> <a name="IsCurrent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.isCurrent"></a>

```csharp
public IResolvable IsCurrent { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.notAfter"></a>

```csharp
public string NotAfter { get; }
```

- *Type:* string

---

##### `PublicCertificate`<sup>Required</sup> <a name="PublicCertificate" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.publicCertificate"></a>

```csharp
public string PublicCertificate { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificate">DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificate</a>

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.currentCertificate">CurrentCertificate</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.previousCertificate">PreviousCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSet">DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CurrentCertificate`<sup>Required</sup> <a name="CurrentCertificate" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.currentCertificate"></a>

```csharp
public DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference CurrentCertificate { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference">DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetCurrentCertificateOutputReference</a>

---

##### `PreviousCertificate`<sup>Required</sup> <a name="PreviousCertificate" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.previousCertificate"></a>

```csharp
public string PreviousCertificate { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSetOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSet InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSet">DataCloudflareZeroTrustAccessIdentityProvidersResultSamlCertificateSet</a>

---


### DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference <a name="DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.identityUpdateBehavior">IdentityUpdateBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.scimBaseUrl">ScimBaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.seatDeprovision">SeatDeprovision</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.userDeprovision">UserDeprovision</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig">DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IdentityUpdateBehavior`<sup>Required</sup> <a name="IdentityUpdateBehavior" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.identityUpdateBehavior"></a>

```csharp
public string IdentityUpdateBehavior { get; }
```

- *Type:* string

---

##### `ScimBaseUrl`<sup>Required</sup> <a name="ScimBaseUrl" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.scimBaseUrl"></a>

```csharp
public string ScimBaseUrl { get; }
```

- *Type:* string

---

##### `SeatDeprovision`<sup>Required</sup> <a name="SeatDeprovision" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.seatDeprovision"></a>

```csharp
public IResolvable SeatDeprovision { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `UserDeprovision`<sup>Required</sup> <a name="UserDeprovision" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.userDeprovision"></a>

```csharp
public IResolvable UserDeprovision { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessIdentityProviders.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig">DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig</a>

---



