# `dataCloudflareEmailSecurityAllowPolicy` Submodule <a name="`dataCloudflareEmailSecurityAllowPolicy` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityAllowPolicy <a name="DataCloudflareEmailSecurityAllowPolicy" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy cloudflare_email_security_allow_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityAllowPolicy(Construct Scope, string Id, DataCloudflareEmailSecurityAllowPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig">DataCloudflareEmailSecurityAllowPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig">DataCloudflareEmailSecurityAllowPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetPolicyId">ResetPolicyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareEmailSecurityAllowPolicyFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityAllowPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityAllowPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityAllowPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityAllowPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailSecurityAllowPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailSecurityAllowPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityAllowPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.comments">Comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference">DataCloudflareEmailSecurityAllowPolicyFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRecipient">IsRecipient</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRegex">IsRegex</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSender">IsSender</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSpoof">IsSpoof</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isTrustedSender">IsTrustedSender</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.patternType">PatternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.verifySender">VerifySender</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.comments"></a>

```csharp
public string Comments { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filter"></a>

```csharp
public DataCloudflareEmailSecurityAllowPolicyFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference">DataCloudflareEmailSecurityAllowPolicyFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAcceptableSender`<sup>Required</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isAcceptableSender"></a>

```csharp
public IResolvable IsAcceptableSender { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsExemptRecipient`<sup>Required</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isExemptRecipient"></a>

```csharp
public IResolvable IsExemptRecipient { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsRecipient`<sup>Required</sup> <a name="IsRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRecipient"></a>

```csharp
public IResolvable IsRecipient { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRegex"></a>

```csharp
public IResolvable IsRegex { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsSender`<sup>Required</sup> <a name="IsSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSender"></a>

```csharp
public IResolvable IsSender { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsSpoof`<sup>Required</sup> <a name="IsSpoof" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSpoof"></a>

```csharp
public IResolvable IsSpoof { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsTrustedSender`<sup>Required</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isTrustedSender"></a>

```csharp
public IResolvable IsTrustedSender { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.patternType"></a>

```csharp
public string PatternType { get; }
```

- *Type:* string

---

##### `VerifySender`<sup>Required</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.verifySender"></a>

```csharp
public IResolvable VerifySender { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareEmailSecurityAllowPolicyFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityAllowPolicyConfig <a name="DataCloudflareEmailSecurityAllowPolicyConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityAllowPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    DataCloudflareEmailSecurityAllowPolicyFilter Filter = null,
    string PolicyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#filter DataCloudflareEmailSecurityAllowPolicy#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Allow policy identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#account_id DataCloudflareEmailSecurityAllowPolicy#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.filter"></a>

```csharp
public DataCloudflareEmailSecurityAllowPolicyFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#filter DataCloudflareEmailSecurityAllowPolicy#filter}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Allow policy identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#policy_id DataCloudflareEmailSecurityAllowPolicy#policy_id}

---

### DataCloudflareEmailSecurityAllowPolicyFilter <a name="DataCloudflareEmailSecurityAllowPolicyFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityAllowPolicyFilter {
    string Direction = null,
    bool|IResolvable IsAcceptableSender = null,
    bool|IResolvable IsExemptRecipient = null,
    bool|IResolvable IsTrustedSender = null,
    string Order = null,
    string Pattern = null,
    string PatternType = null,
    string Search = null,
    bool|IResolvable VerifySender = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.direction">Direction</a></code> | <code>string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Filter to show only policies where messages to the recipient bypass all detections. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isTrustedSender">IsTrustedSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Filter to show only policies where messages from the sender bypass all detections and link following. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.order">Order</a></code> | <code>string</code> | Field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.pattern">Pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern DataCloudflareEmailSecurityAllowPolicy#pattern}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.patternType">PatternType</a></code> | <code>string</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.search">Search</a></code> | <code>string</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.verifySender">VerifySender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Filter to show only policies that enforce DMARC, SPF, or DKIM authentication. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#direction DataCloudflareEmailSecurityAllowPolicy#direction}

---

##### `IsAcceptableSender`<sup>Optional</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isAcceptableSender"></a>

```csharp
public bool|IResolvable IsAcceptableSender { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_acceptable_sender DataCloudflareEmailSecurityAllowPolicy#is_acceptable_sender}

---

##### `IsExemptRecipient`<sup>Optional</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isExemptRecipient"></a>

```csharp
public bool|IResolvable IsExemptRecipient { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Filter to show only policies where messages to the recipient bypass all detections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_exempt_recipient DataCloudflareEmailSecurityAllowPolicy#is_exempt_recipient}

---

##### `IsTrustedSender`<sup>Optional</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isTrustedSender"></a>

```csharp
public bool|IResolvable IsTrustedSender { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Filter to show only policies where messages from the sender bypass all detections and link following.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_trusted_sender DataCloudflareEmailSecurityAllowPolicy#is_trusted_sender}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#order DataCloudflareEmailSecurityAllowPolicy#order}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern DataCloudflareEmailSecurityAllowPolicy#pattern}.

---

##### `PatternType`<sup>Optional</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.patternType"></a>

```csharp
public string PatternType { get; set; }
```

- *Type:* string

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern_type DataCloudflareEmailSecurityAllowPolicy#pattern_type}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#search DataCloudflareEmailSecurityAllowPolicy#search}

---

##### `VerifySender`<sup>Optional</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.verifySender"></a>

```csharp
public bool|IResolvable VerifySender { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Filter to show only policies that enforce DMARC, SPF, or DKIM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#verify_sender DataCloudflareEmailSecurityAllowPolicy#verify_sender}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityAllowPolicyFilterOutputReference <a name="DataCloudflareEmailSecurityAllowPolicyFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityAllowPolicyFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsAcceptableSender">ResetIsAcceptableSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsExemptRecipient">ResetIsExemptRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsTrustedSender">ResetIsTrustedSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPatternType">ResetPatternType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetVerifySender">ResetVerifySender</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetIsAcceptableSender` <a name="ResetIsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsAcceptableSender"></a>

```csharp
private void ResetIsAcceptableSender()
```

##### `ResetIsExemptRecipient` <a name="ResetIsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsExemptRecipient"></a>

```csharp
private void ResetIsExemptRecipient()
```

##### `ResetIsTrustedSender` <a name="ResetIsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsTrustedSender"></a>

```csharp
private void ResetIsTrustedSender()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetPatternType` <a name="ResetPatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPatternType"></a>

```csharp
private void ResetPatternType()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetVerifySender` <a name="ResetVerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetVerifySender"></a>

```csharp
private void ResetVerifySender()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSenderInput">IsAcceptableSenderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipientInput">IsExemptRecipientInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSenderInput">IsTrustedSenderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternTypeInput">PatternTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySenderInput">VerifySenderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSender">IsTrustedSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternType">PatternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySender">VerifySender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `IsAcceptableSenderInput`<sup>Optional</sup> <a name="IsAcceptableSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSenderInput"></a>

```csharp
public bool|IResolvable IsAcceptableSenderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsExemptRecipientInput`<sup>Optional</sup> <a name="IsExemptRecipientInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipientInput"></a>

```csharp
public bool|IResolvable IsExemptRecipientInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsTrustedSenderInput`<sup>Optional</sup> <a name="IsTrustedSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSenderInput"></a>

```csharp
public bool|IResolvable IsTrustedSenderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `PatternTypeInput`<sup>Optional</sup> <a name="PatternTypeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternTypeInput"></a>

```csharp
public string PatternTypeInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `VerifySenderInput`<sup>Optional</sup> <a name="VerifySenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySenderInput"></a>

```csharp
public bool|IResolvable VerifySenderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `IsAcceptableSender`<sup>Required</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSender"></a>

```csharp
public bool|IResolvable IsAcceptableSender { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsExemptRecipient`<sup>Required</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipient"></a>

```csharp
public bool|IResolvable IsExemptRecipient { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsTrustedSender`<sup>Required</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSender"></a>

```csharp
public bool|IResolvable IsTrustedSender { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternType"></a>

```csharp
public string PatternType { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `VerifySender`<sup>Required</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySender"></a>

```csharp
public bool|IResolvable VerifySender { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareEmailSecurityAllowPolicyFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

---



