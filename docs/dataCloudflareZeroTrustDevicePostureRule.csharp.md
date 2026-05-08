# `dataCloudflareZeroTrustDevicePostureRule` Submodule <a name="`dataCloudflareZeroTrustDevicePostureRule` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDevicePostureRule <a name="DataCloudflareZeroTrustDevicePostureRule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDevicePostureRule(Construct Scope, string Id, DataCloudflareZeroTrustDevicePostureRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig">DataCloudflareZeroTrustDevicePostureRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig">DataCloudflareZeroTrustDevicePostureRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDevicePostureRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustDevicePostureRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustDevicePostureRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustDevicePostureRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustDevicePostureRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDevicePostureRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDevicePostureRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/zero_trust_device_posture_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.input">Input</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference">DataCloudflareZeroTrustDevicePostureRuleInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.match">Match</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList">DataCloudflareZeroTrustDevicePostureRuleMatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.ruleIdInput">RuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.input"></a>

```csharp
public DataCloudflareZeroTrustDevicePostureRuleInputOutputReference Input { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference">DataCloudflareZeroTrustDevicePostureRuleInputOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.match"></a>

```csharp
public DataCloudflareZeroTrustDevicePostureRuleMatchList Match { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList">DataCloudflareZeroTrustDevicePostureRuleMatchList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.ruleIdInput"></a>

```csharp
public string RuleIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDevicePostureRuleConfig <a name="DataCloudflareZeroTrustDevicePostureRuleConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDevicePostureRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RuleId,
    string AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.ruleId">RuleId</a></code> | <code>string</code> | API UUID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/zero_trust_device_posture_rule#account_id DataCloudflareZeroTrustDevicePostureRule#account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.ruleId"></a>

```csharp
public string RuleId { get; set; }
```

- *Type:* string

API UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/zero_trust_device_posture_rule#rule_id DataCloudflareZeroTrustDevicePostureRule#rule_id}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/zero_trust_device_posture_rule#account_id DataCloudflareZeroTrustDevicePostureRule#account_id}.

---

### DataCloudflareZeroTrustDevicePostureRuleInput <a name="DataCloudflareZeroTrustDevicePostureRuleInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDevicePostureRuleInput {

};
```


### DataCloudflareZeroTrustDevicePostureRuleInputLocations <a name="DataCloudflareZeroTrustDevicePostureRuleInputLocations" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDevicePostureRuleInputLocations {

};
```


### DataCloudflareZeroTrustDevicePostureRuleMatch <a name="DataCloudflareZeroTrustDevicePostureRuleMatch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDevicePostureRuleMatch {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference <a name="DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStores">TrustStores</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations">DataCloudflareZeroTrustDevicePostureRuleInputLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `TrustStores`<sup>Required</sup> <a name="TrustStores" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStores"></a>

```csharp
public string[] TrustStores { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDevicePostureRuleInputLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocations">DataCloudflareZeroTrustDevicePostureRuleInputLocations</a>

---


### DataCloudflareZeroTrustDevicePostureRuleInputOutputReference <a name="DataCloudflareZeroTrustDevicePostureRuleInputOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDevicePostureRuleInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.activeThreats">ActiveThreats</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.authState">AuthState</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.checkDisks">CheckDisks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKey">CheckPrivateKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.cn">Cn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatus">ComplianceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.countOperator">CountOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeen">EidLastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.exists">Exists</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.infected">Infected</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.isActive">IsActive</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.issueCount">IssueCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.lastSeen">LastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.locations">Locations</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference">DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.networkStatus">NetworkStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operationalState">OperationalState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.os">Os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osDistroName">OsDistroName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevision">OsDistroRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtra">OsVersionExtra</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.overall">Overall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.requireAll">RequireAll</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.riskLevel">RiskLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.score">Score</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.scoreOperator">ScoreOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfig">SensorConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.totalScore">TotalScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.updateWindowDays">UpdateWindowDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.versionOperator">VersionOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput">DataCloudflareZeroTrustDevicePostureRuleInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveThreats`<sup>Required</sup> <a name="ActiveThreats" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.activeThreats"></a>

```csharp
public double ActiveThreats { get; }
```

- *Type:* double

---

##### `AuthState`<sup>Required</sup> <a name="AuthState" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.authState"></a>

```csharp
public string[] AuthState { get; }
```

- *Type:* string[]

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `CheckDisks`<sup>Required</sup> <a name="CheckDisks" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.checkDisks"></a>

```csharp
public string[] CheckDisks { get; }
```

- *Type:* string[]

---

##### `CheckPrivateKey`<sup>Required</sup> <a name="CheckPrivateKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKey"></a>

```csharp
public IResolvable CheckPrivateKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Cn`<sup>Required</sup> <a name="Cn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.cn"></a>

```csharp
public string Cn { get; }
```

- *Type:* string

---

##### `ComplianceStatus`<sup>Required</sup> <a name="ComplianceStatus" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatus"></a>

```csharp
public string ComplianceStatus { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `CountOperator`<sup>Required</sup> <a name="CountOperator" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.countOperator"></a>

```csharp
public string CountOperator { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `EidLastSeen`<sup>Required</sup> <a name="EidLastSeen" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeen"></a>

```csharp
public string EidLastSeen { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Exists`<sup>Required</sup> <a name="Exists" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.exists"></a>

```csharp
public IResolvable Exists { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsage"></a>

```csharp
public string[] ExtendedKeyUsage { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Infected`<sup>Required</sup> <a name="Infected" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.infected"></a>

```csharp
public IResolvable Infected { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.isActive"></a>

```csharp
public IResolvable IsActive { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IssueCount`<sup>Required</sup> <a name="IssueCount" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.issueCount"></a>

```csharp
public string IssueCount { get; }
```

- *Type:* string

---

##### `LastSeen`<sup>Required</sup> <a name="LastSeen" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.lastSeen"></a>

```csharp
public string LastSeen { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.locations"></a>

```csharp
public DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference Locations { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference">DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference</a>

---

##### `NetworkStatus`<sup>Required</sup> <a name="NetworkStatus" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.networkStatus"></a>

```csharp
public string NetworkStatus { get; }
```

- *Type:* string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `OperationalState`<sup>Required</sup> <a name="OperationalState" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operationalState"></a>

```csharp
public string OperationalState { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.os"></a>

```csharp
public string Os { get; }
```

- *Type:* string

---

##### `OsDistroName`<sup>Required</sup> <a name="OsDistroName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osDistroName"></a>

```csharp
public string OsDistroName { get; }
```

- *Type:* string

---

##### `OsDistroRevision`<sup>Required</sup> <a name="OsDistroRevision" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevision"></a>

```csharp
public string OsDistroRevision { get; }
```

- *Type:* string

---

##### `OsVersionExtra`<sup>Required</sup> <a name="OsVersionExtra" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtra"></a>

```csharp
public string OsVersionExtra { get; }
```

- *Type:* string

---

##### `Overall`<sup>Required</sup> <a name="Overall" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.overall"></a>

```csharp
public string Overall { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RequireAll`<sup>Required</sup> <a name="RequireAll" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.requireAll"></a>

```csharp
public IResolvable RequireAll { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.riskLevel"></a>

```csharp
public string RiskLevel { get; }
```

- *Type:* string

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.score"></a>

```csharp
public double Score { get; }
```

- *Type:* double

---

##### `ScoreOperator`<sup>Required</sup> <a name="ScoreOperator" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.scoreOperator"></a>

```csharp
public string ScoreOperator { get; }
```

- *Type:* string

---

##### `SensorConfig`<sup>Required</sup> <a name="SensorConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfig"></a>

```csharp
public string SensorConfig { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; }
```

- *Type:* string[]

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `TotalScore`<sup>Required</sup> <a name="TotalScore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.totalScore"></a>

```csharp
public double TotalScore { get; }
```

- *Type:* double

---

##### `UpdateWindowDays`<sup>Required</sup> <a name="UpdateWindowDays" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.updateWindowDays"></a>

```csharp
public double UpdateWindowDays { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VersionOperator`<sup>Required</sup> <a name="VersionOperator" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.versionOperator"></a>

```csharp
public string VersionOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDevicePostureRuleInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleInput">DataCloudflareZeroTrustDevicePostureRuleInput</a>

---


### DataCloudflareZeroTrustDevicePostureRuleMatchList <a name="DataCloudflareZeroTrustDevicePostureRuleMatchList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDevicePostureRuleMatchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.get"></a>

```csharp
private DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference <a name="DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch">DataCloudflareZeroTrustDevicePostureRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustDevicePostureRuleMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDevicePostureRule.DataCloudflareZeroTrustDevicePostureRuleMatch">DataCloudflareZeroTrustDevicePostureRuleMatch</a>

---



