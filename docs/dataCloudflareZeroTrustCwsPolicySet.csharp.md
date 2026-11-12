# `dataCloudflareZeroTrustCwsPolicySet` Submodule <a name="`dataCloudflareZeroTrustCwsPolicySet` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsPolicySet <a name="DataCloudflareZeroTrustCwsPolicySet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_set cloudflare_zero_trust_cws_policy_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsPolicySet(Construct Scope, string Id, DataCloudflareZeroTrustCwsPolicySetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig">DataCloudflareZeroTrustCwsPolicySetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig">DataCloudflareZeroTrustCwsPolicySetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.resetPolicySetId">ResetPolicySetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareZeroTrustCwsPolicySetFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter">DataCloudflareZeroTrustCwsPolicySetFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetPolicySetId` <a name="ResetPolicySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.resetPolicySetId"></a>

```csharp
private void ResetPolicySetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsPolicySet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsPolicySet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsPolicySet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsPolicySet.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustCwsPolicySet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsPolicySet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsPolicySet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCwsPolicySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsPolicySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.excludeWorkloadIds">ExcludeWorkloadIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference">DataCloudflareZeroTrustCwsPolicySetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.includeWorkloadIds">IncludeWorkloadIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList">DataCloudflareZeroTrustCwsPolicySetPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter">DataCloudflareZeroTrustCwsPolicySetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.policySetIdInput">PolicySetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.policySetId">PolicySetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExcludeWorkloadIds`<sup>Required</sup> <a name="ExcludeWorkloadIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.excludeWorkloadIds"></a>

```csharp
public string[] ExcludeWorkloadIds { get; }
```

- *Type:* string[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.filter"></a>

```csharp
public DataCloudflareZeroTrustCwsPolicySetFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference">DataCloudflareZeroTrustCwsPolicySetFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeWorkloadIds`<sup>Required</sup> <a name="IncludeWorkloadIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.includeWorkloadIds"></a>

```csharp
public string[] IncludeWorkloadIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.policies"></a>

```csharp
public DataCloudflareZeroTrustCwsPolicySetPoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList">DataCloudflareZeroTrustCwsPolicySetPoliciesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustCwsPolicySetFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter">DataCloudflareZeroTrustCwsPolicySetFilter</a>

---

##### `PolicySetIdInput`<sup>Optional</sup> <a name="PolicySetIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.policySetIdInput"></a>

```csharp
public string PolicySetIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `PolicySetId`<sup>Required</sup> <a name="PolicySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.policySetId"></a>

```csharp
public string PolicySetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsPolicySetConfig <a name="DataCloudflareZeroTrustCwsPolicySetConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsPolicySetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    DataCloudflareZeroTrustCwsPolicySetFilter Filter = null,
    string PolicySetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter">DataCloudflareZeroTrustCwsPolicySetFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_set#filter DataCloudflareZeroTrustCwsPolicySet#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.policySetId">PolicySetId</a></code> | <code>string</code> | ID of the policy set to retrieve. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_set#account_id DataCloudflareZeroTrustCwsPolicySet#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.filter"></a>

```csharp
public DataCloudflareZeroTrustCwsPolicySetFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter">DataCloudflareZeroTrustCwsPolicySetFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_set#filter DataCloudflareZeroTrustCwsPolicySet#filter}.

---

##### `PolicySetId`<sup>Optional</sup> <a name="PolicySetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetConfig.property.policySetId"></a>

```csharp
public string PolicySetId { get; set; }
```

- *Type:* string

ID of the policy set to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_set#policy_set_id DataCloudflareZeroTrustCwsPolicySet#policy_set_id}

---

### DataCloudflareZeroTrustCwsPolicySetFilter <a name="DataCloudflareZeroTrustCwsPolicySetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsPolicySetFilter {
    string DeploymentId = null,
    string Direction = null,
    string Name = null,
    string Order = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Filter to policy sets attached to this deployment. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter.property.direction">Direction</a></code> | <code>string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter.property.name">Name</a></code> | <code>string</code> | Filter by policy set name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter.property.order">Order</a></code> | <code>string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Filter to policy sets attached to this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_set#deployment_id DataCloudflareZeroTrustCwsPolicySet#deployment_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_set#direction DataCloudflareZeroTrustCwsPolicySet#direction}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Filter by policy set name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_set#name DataCloudflareZeroTrustCwsPolicySet#name}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_set#order DataCloudflareZeroTrustCwsPolicySet#order}

---

### DataCloudflareZeroTrustCwsPolicySetPolicies <a name="DataCloudflareZeroTrustCwsPolicySetPolicies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsPolicySetPolicies {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsPolicySetFilterOutputReference <a name="DataCloudflareZeroTrustCwsPolicySetFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsPolicySetFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.resetDeploymentId"></a>

```csharp
private void ResetDeploymentId()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter">DataCloudflareZeroTrustCwsPolicySetFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareZeroTrustCwsPolicySetFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetFilter">DataCloudflareZeroTrustCwsPolicySetFilter</a>

---


### DataCloudflareZeroTrustCwsPolicySetPoliciesList <a name="DataCloudflareZeroTrustCwsPolicySetPoliciesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsPolicySetPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.get"></a>

```csharp
private DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference <a name="DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.property.enforce">Enforce</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPolicies">DataCloudflareZeroTrustCwsPolicySetPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.property.enforce"></a>

```csharp
public IResolvable Enforce { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustCwsPolicySetPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySet.DataCloudflareZeroTrustCwsPolicySetPolicies">DataCloudflareZeroTrustCwsPolicySetPolicies</a>

---



