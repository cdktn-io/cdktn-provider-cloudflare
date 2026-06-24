# `dataCloudflareZeroTrustOrganization` Submodule <a name="`dataCloudflareZeroTrustOrganization` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustOrganization <a name="DataCloudflareZeroTrustOrganization" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization cloudflare_zero_trust_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustOrganization(Construct Scope, string Id, DataCloudflareZeroTrustOrganizationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig">DataCloudflareZeroTrustOrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig">DataCloudflareZeroTrustOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustOrganization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustOrganization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustOrganization.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareZeroTrustOrganization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareZeroTrustOrganization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustOrganization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.authDomain">AuthDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.customPages">CustomPages</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference">DataCloudflareZeroTrustOrganizationCustomPagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.denyUnmatchedRequests">DenyUnmatchedRequests</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNames">DenyUnmatchedRequestsExemptedZoneNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.isUiReadOnly">IsUiReadOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.loginDesign">LoginDesign</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference">DataCloudflareZeroTrustOrganizationLoginDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.mfaConfig">MfaConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference">DataCloudflareZeroTrustOrganizationMfaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.mfaRequiredForAllApps">MfaRequiredForAllApps</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.mfaSshPivKeyRequirements">MfaSshPivKeyRequirements</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference">DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.uiReadOnlyToggleReason">UiReadOnlyToggleReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.userSeatExpirationInactiveTime">UserSeatExpirationInactiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.warpAuthSessionDuration">WarpAuthSessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllowAuthenticateViaWarp`<sup>Required</sup> <a name="AllowAuthenticateViaWarp" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.allowAuthenticateViaWarp"></a>

```csharp
public IResolvable AllowAuthenticateViaWarp { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AuthDomain`<sup>Required</sup> <a name="AuthDomain" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.authDomain"></a>

```csharp
public string AuthDomain { get; }
```

- *Type:* string

---

##### `AutoRedirectToIdentity`<sup>Required</sup> <a name="AutoRedirectToIdentity" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.autoRedirectToIdentity"></a>

```csharp
public IResolvable AutoRedirectToIdentity { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CustomPages`<sup>Required</sup> <a name="CustomPages" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.customPages"></a>

```csharp
public DataCloudflareZeroTrustOrganizationCustomPagesOutputReference CustomPages { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference">DataCloudflareZeroTrustOrganizationCustomPagesOutputReference</a>

---

##### `DenyUnmatchedRequests`<sup>Required</sup> <a name="DenyUnmatchedRequests" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.denyUnmatchedRequests"></a>

```csharp
public IResolvable DenyUnmatchedRequests { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DenyUnmatchedRequestsExemptedZoneNames`<sup>Required</sup> <a name="DenyUnmatchedRequestsExemptedZoneNames" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNames"></a>

```csharp
public string[] DenyUnmatchedRequestsExemptedZoneNames { get; }
```

- *Type:* string[]

---

##### `IsUiReadOnly`<sup>Required</sup> <a name="IsUiReadOnly" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.isUiReadOnly"></a>

```csharp
public IResolvable IsUiReadOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LoginDesign`<sup>Required</sup> <a name="LoginDesign" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.loginDesign"></a>

```csharp
public DataCloudflareZeroTrustOrganizationLoginDesignOutputReference LoginDesign { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference">DataCloudflareZeroTrustOrganizationLoginDesignOutputReference</a>

---

##### `MfaConfig`<sup>Required</sup> <a name="MfaConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.mfaConfig"></a>

```csharp
public DataCloudflareZeroTrustOrganizationMfaConfigOutputReference MfaConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference">DataCloudflareZeroTrustOrganizationMfaConfigOutputReference</a>

---

##### `MfaRequiredForAllApps`<sup>Required</sup> <a name="MfaRequiredForAllApps" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.mfaRequiredForAllApps"></a>

```csharp
public IResolvable MfaRequiredForAllApps { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MfaSshPivKeyRequirements`<sup>Required</sup> <a name="MfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.mfaSshPivKeyRequirements"></a>

```csharp
public DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference MfaSshPivKeyRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference">DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; }
```

- *Type:* string

---

##### `UiReadOnlyToggleReason`<sup>Required</sup> <a name="UiReadOnlyToggleReason" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.uiReadOnlyToggleReason"></a>

```csharp
public string UiReadOnlyToggleReason { get; }
```

- *Type:* string

---

##### `UserSeatExpirationInactiveTime`<sup>Required</sup> <a name="UserSeatExpirationInactiveTime" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.userSeatExpirationInactiveTime"></a>

```csharp
public string UserSeatExpirationInactiveTime { get; }
```

- *Type:* string

---

##### `WarpAuthSessionDuration`<sup>Required</sup> <a name="WarpAuthSessionDuration" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.warpAuthSessionDuration"></a>

```csharp
public string WarpAuthSessionDuration { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustOrganizationConfig <a name="DataCloudflareZeroTrustOrganizationConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustOrganizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization#account_id DataCloudflareZeroTrustOrganization#account_id}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_organization#zone_id DataCloudflareZeroTrustOrganization#zone_id}

---

### DataCloudflareZeroTrustOrganizationCustomPages <a name="DataCloudflareZeroTrustOrganizationCustomPages" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustOrganizationCustomPages {

};
```


### DataCloudflareZeroTrustOrganizationLoginDesign <a name="DataCloudflareZeroTrustOrganizationLoginDesign" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesign"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesign.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustOrganizationLoginDesign {

};
```


### DataCloudflareZeroTrustOrganizationMfaConfig <a name="DataCloudflareZeroTrustOrganizationMfaConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustOrganizationMfaConfig {

};
```


### DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements <a name="DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustOrganizationCustomPagesOutputReference <a name="DataCloudflareZeroTrustOrganizationCustomPagesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustOrganizationCustomPagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.forbidden">Forbidden</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied">IdentityDenied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPages">DataCloudflareZeroTrustOrganizationCustomPages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Forbidden`<sup>Required</sup> <a name="Forbidden" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.forbidden"></a>

```csharp
public string Forbidden { get; }
```

- *Type:* string

---

##### `IdentityDenied`<sup>Required</sup> <a name="IdentityDenied" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied"></a>

```csharp
public string IdentityDenied { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPagesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustOrganizationCustomPages InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationCustomPages">DataCloudflareZeroTrustOrganizationCustomPages</a>

---


### DataCloudflareZeroTrustOrganizationLoginDesignOutputReference <a name="DataCloudflareZeroTrustOrganizationLoginDesignOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustOrganizationLoginDesignOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.footerText">FooterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.headerText">HeaderText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.logoPath">LogoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesign">DataCloudflareZeroTrustOrganizationLoginDesign</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.footerText"></a>

```csharp
public string FooterText { get; }
```

- *Type:* string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.headerText"></a>

```csharp
public string HeaderText { get; }
```

- *Type:* string

---

##### `LogoPath`<sup>Required</sup> <a name="LogoPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.logoPath"></a>

```csharp
public string LogoPath { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesignOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustOrganizationLoginDesign InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationLoginDesign">DataCloudflareZeroTrustOrganizationLoginDesign</a>

---


### DataCloudflareZeroTrustOrganizationMfaConfigOutputReference <a name="DataCloudflareZeroTrustOrganizationMfaConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustOrganizationMfaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.allowedAuthenticators">AllowedAuthenticators</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.amrMatchingSessionDuration">AmrMatchingSessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.requiredAaguids">RequiredAaguids</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfig">DataCloudflareZeroTrustOrganizationMfaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAuthenticators`<sup>Required</sup> <a name="AllowedAuthenticators" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.allowedAuthenticators"></a>

```csharp
public string[] AllowedAuthenticators { get; }
```

- *Type:* string[]

---

##### `AmrMatchingSessionDuration`<sup>Required</sup> <a name="AmrMatchingSessionDuration" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.amrMatchingSessionDuration"></a>

```csharp
public string AmrMatchingSessionDuration { get; }
```

- *Type:* string

---

##### `RequiredAaguids`<sup>Required</sup> <a name="RequiredAaguids" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.requiredAaguids"></a>

```csharp
public string RequiredAaguids { get; }
```

- *Type:* string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfigOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustOrganizationMfaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaConfig">DataCloudflareZeroTrustOrganizationMfaConfig</a>

---


### DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference <a name="DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.pinPolicy">PinPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.requireFipsDevice">RequireFipsDevice</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeySize">SshKeySize</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeyType">SshKeyType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.touchPolicy">TouchPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements">DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PinPolicy`<sup>Required</sup> <a name="PinPolicy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.pinPolicy"></a>

```csharp
public string PinPolicy { get; }
```

- *Type:* string

---

##### `RequireFipsDevice`<sup>Required</sup> <a name="RequireFipsDevice" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.requireFipsDevice"></a>

```csharp
public IResolvable RequireFipsDevice { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SshKeySize`<sup>Required</sup> <a name="SshKeySize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeySize"></a>

```csharp
public double[] SshKeySize { get; }
```

- *Type:* double[]

---

##### `SshKeyType`<sup>Required</sup> <a name="SshKeyType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeyType"></a>

```csharp
public string[] SshKeyType { get; }
```

- *Type:* string[]

---

##### `TouchPolicy`<sup>Required</sup> <a name="TouchPolicy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.touchPolicy"></a>

```csharp
public string TouchPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganization.DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements">DataCloudflareZeroTrustOrganizationMfaSshPivKeyRequirements</a>

---



