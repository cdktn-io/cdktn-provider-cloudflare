# `dataCloudflareZeroTrustDeviceCustomProfile` Submodule <a name="`dataCloudflareZeroTrustDeviceCustomProfile` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceCustomProfile <a name="DataCloudflareZeroTrustDeviceCustomProfile" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfile(Construct Scope, string Id, DataCloudflareZeroTrustDeviceCustomProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig">DataCloudflareZeroTrustDeviceCustomProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig">DataCloudflareZeroTrustDeviceCustomProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceCustomProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustDeviceCustomProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustDeviceCustomProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustDeviceCustomProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustDeviceCustomProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceCustomProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceCustomProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDeviceCustomProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_device_custom_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceCustomProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowedToLeave">AllowedToLeave</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowModeSwitch">AllowModeSwitch</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowUpdates">AllowUpdates</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.autoConnect">AutoConnect</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.captivePortal">CaptivePortal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.default">Default</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.disableAutoFallback">DisableAutoFallback</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.dnsSearchSuffixes">DnsSearchSuffixes</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList">DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.exclude">Exclude</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList">DataCloudflareZeroTrustDeviceCustomProfileExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.excludeOfficeIps">ExcludeOfficeIps</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.fallbackDomains">FallbackDomains</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList">DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.gatewayUniqueId">GatewayUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.include">Include</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList">DataCloudflareZeroTrustDeviceCustomProfileIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lanAllowMinutes">LanAllowMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lanAllowSubnetSize">LanAllowSubnetSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.match">Match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.precedence">Precedence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.registerInterfaceIpWithDns">RegisterInterfaceIpWithDns</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.sccmVpnBoundarySupport">SccmVpnBoundarySupport</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.serviceModeV2">ServiceModeV2</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.supportUrl">SupportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.switchLocked">SwitchLocked</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.targetTests">TargetTests</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList">DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.tunnelProtocol">TunnelProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.virtualNetworks">VirtualNetworks</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference">DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllowedToLeave`<sup>Required</sup> <a name="AllowedToLeave" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowedToLeave"></a>

```csharp
public IResolvable AllowedToLeave { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AllowModeSwitch`<sup>Required</sup> <a name="AllowModeSwitch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowModeSwitch"></a>

```csharp
public IResolvable AllowModeSwitch { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AllowUpdates`<sup>Required</sup> <a name="AllowUpdates" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowUpdates"></a>

```csharp
public IResolvable AllowUpdates { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AutoConnect`<sup>Required</sup> <a name="AutoConnect" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.autoConnect"></a>

```csharp
public double AutoConnect { get; }
```

- *Type:* double

---

##### `CaptivePortal`<sup>Required</sup> <a name="CaptivePortal" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.captivePortal"></a>

```csharp
public double CaptivePortal { get; }
```

- *Type:* double

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableAutoFallback`<sup>Required</sup> <a name="DisableAutoFallback" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.disableAutoFallback"></a>

```csharp
public IResolvable DisableAutoFallback { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DnsSearchSuffixes`<sup>Required</sup> <a name="DnsSearchSuffixes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.dnsSearchSuffixes"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList DnsSearchSuffixes { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList">DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.exclude"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileExcludeList Exclude { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList">DataCloudflareZeroTrustDeviceCustomProfileExcludeList</a>

---

##### `ExcludeOfficeIps`<sup>Required</sup> <a name="ExcludeOfficeIps" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.excludeOfficeIps"></a>

```csharp
public IResolvable ExcludeOfficeIps { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `FallbackDomains`<sup>Required</sup> <a name="FallbackDomains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.fallbackDomains"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList FallbackDomains { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList">DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList</a>

---

##### `GatewayUniqueId`<sup>Required</sup> <a name="GatewayUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.gatewayUniqueId"></a>

```csharp
public string GatewayUniqueId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.include"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileIncludeList Include { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList">DataCloudflareZeroTrustDeviceCustomProfileIncludeList</a>

---

##### `LanAllowMinutes`<sup>Required</sup> <a name="LanAllowMinutes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lanAllowMinutes"></a>

```csharp
public double LanAllowMinutes { get; }
```

- *Type:* double

---

##### `LanAllowSubnetSize`<sup>Required</sup> <a name="LanAllowSubnetSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lanAllowSubnetSize"></a>

```csharp
public double LanAllowSubnetSize { get; }
```

- *Type:* double

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.match"></a>

```csharp
public string Match { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.precedence"></a>

```csharp
public double Precedence { get; }
```

- *Type:* double

---

##### `RegisterInterfaceIpWithDns`<sup>Required</sup> <a name="RegisterInterfaceIpWithDns" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.registerInterfaceIpWithDns"></a>

```csharp
public IResolvable RegisterInterfaceIpWithDns { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SccmVpnBoundarySupport`<sup>Required</sup> <a name="SccmVpnBoundarySupport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.sccmVpnBoundarySupport"></a>

```csharp
public IResolvable SccmVpnBoundarySupport { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ServiceModeV2`<sup>Required</sup> <a name="ServiceModeV2" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.serviceModeV2"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference ServiceModeV2 { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference</a>

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.supportUrl"></a>

```csharp
public string SupportUrl { get; }
```

- *Type:* string

---

##### `SwitchLocked`<sup>Required</sup> <a name="SwitchLocked" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.switchLocked"></a>

```csharp
public IResolvable SwitchLocked { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TargetTests`<sup>Required</sup> <a name="TargetTests" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.targetTests"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList TargetTests { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList">DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList</a>

---

##### `TunnelProtocol`<sup>Required</sup> <a name="TunnelProtocol" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.tunnelProtocol"></a>

```csharp
public string TunnelProtocol { get; }
```

- *Type:* string

---

##### `VirtualNetworks`<sup>Required</sup> <a name="VirtualNetworks" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.virtualNetworks"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference VirtualNetworks { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference">DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceCustomProfileConfig <a name="DataCloudflareZeroTrustDeviceCustomProfileConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PolicyId,
    string AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_device_custom_profile#policy_id DataCloudflareZeroTrustDeviceCustomProfile#policy_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_device_custom_profile#account_id DataCloudflareZeroTrustDeviceCustomProfile#account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_device_custom_profile#policy_id DataCloudflareZeroTrustDeviceCustomProfile#policy_id}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_device_custom_profile#account_id DataCloudflareZeroTrustDeviceCustomProfile#account_id}.

---

### DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixes <a name="DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixes {

};
```


### DataCloudflareZeroTrustDeviceCustomProfileExclude <a name="DataCloudflareZeroTrustDeviceCustomProfileExclude" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileExclude {

};
```


### DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains <a name="DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains {

};
```


### DataCloudflareZeroTrustDeviceCustomProfileInclude <a name="DataCloudflareZeroTrustDeviceCustomProfileInclude" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileInclude {

};
```


### DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2 <a name="DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2 {

};
```


### DataCloudflareZeroTrustDeviceCustomProfileTargetTests <a name="DataCloudflareZeroTrustDeviceCustomProfileTargetTests" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileTargetTests {

};
```


### DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworks <a name="DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworks" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworks {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList <a name="DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.get"></a>

```csharp
private DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixes">DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixes">DataCloudflareZeroTrustDeviceCustomProfileDnsSearchSuffixes</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileExcludeList <a name="DataCloudflareZeroTrustDeviceCustomProfileExcludeList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileExcludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.get"></a>

```csharp
private DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude">DataCloudflareZeroTrustDeviceCustomProfileExclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileExclude InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude">DataCloudflareZeroTrustDeviceCustomProfileExclude</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList <a name="DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.get"></a>

```csharp
private DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.dnsServer">DnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains">DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.dnsServer"></a>

```csharp
public string[] DnsServer { get; }
```

- *Type:* string[]

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains">DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileIncludeList <a name="DataCloudflareZeroTrustDeviceCustomProfileIncludeList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileIncludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.get"></a>

```csharp
private DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude">DataCloudflareZeroTrustDeviceCustomProfileInclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileInclude InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude">DataCloudflareZeroTrustDeviceCustomProfileInclude</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2">DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2">DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList <a name="DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.get"></a>

```csharp
private DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests">DataCloudflareZeroTrustDeviceCustomProfileTargetTests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileTargetTests InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests">DataCloudflareZeroTrustDeviceCustomProfileTargetTests</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.property.allowed">Allowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworks">DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Allowed`<sup>Required</sup> <a name="Allowed" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.property.allowed"></a>

```csharp
public string[] Allowed { get; }
```

- *Type:* string[]

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworksOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworks">DataCloudflareZeroTrustDeviceCustomProfileVirtualNetworks</a>

---



