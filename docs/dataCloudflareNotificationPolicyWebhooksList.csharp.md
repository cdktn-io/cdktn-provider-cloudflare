# `dataCloudflareNotificationPolicyWebhooksList` Submodule <a name="`dataCloudflareNotificationPolicyWebhooksList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareNotificationPolicyWebhooksList <a name="DataCloudflareNotificationPolicyWebhooksList" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/notification_policy_webhooks_list cloudflare_notification_policy_webhooks_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareNotificationPolicyWebhooksList(Construct Scope, string Id, DataCloudflareNotificationPolicyWebhooksListConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig">DataCloudflareNotificationPolicyWebhooksListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig">DataCloudflareNotificationPolicyWebhooksListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareNotificationPolicyWebhooksList resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareNotificationPolicyWebhooksList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareNotificationPolicyWebhooksList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareNotificationPolicyWebhooksList.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareNotificationPolicyWebhooksList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareNotificationPolicyWebhooksList resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareNotificationPolicyWebhooksList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareNotificationPolicyWebhooksList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/notification_policy_webhooks_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareNotificationPolicyWebhooksList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList">DataCloudflareNotificationPolicyWebhooksListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.result"></a>

```csharp
public DataCloudflareNotificationPolicyWebhooksListResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList">DataCloudflareNotificationPolicyWebhooksListResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareNotificationPolicyWebhooksListConfig <a name="DataCloudflareNotificationPolicyWebhooksListConfig" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareNotificationPolicyWebhooksListConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    double MaxItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account id. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/notification_policy_webhooks_list#account_id DataCloudflareNotificationPolicyWebhooksList#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/notification_policy_webhooks_list#max_items DataCloudflareNotificationPolicyWebhooksList#max_items}

---

### DataCloudflareNotificationPolicyWebhooksListResult <a name="DataCloudflareNotificationPolicyWebhooksListResult" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareNotificationPolicyWebhooksListResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareNotificationPolicyWebhooksListResultList <a name="DataCloudflareNotificationPolicyWebhooksListResultList" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareNotificationPolicyWebhooksListResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.get"></a>

```csharp
private DataCloudflareNotificationPolicyWebhooksListResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareNotificationPolicyWebhooksListResultOutputReference <a name="DataCloudflareNotificationPolicyWebhooksListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareNotificationPolicyWebhooksListResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.lastFailure">LastFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.lastSuccess">LastSuccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult">DataCloudflareNotificationPolicyWebhooksListResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastFailure`<sup>Required</sup> <a name="LastFailure" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.lastFailure"></a>

```csharp
public string LastFailure { get; }
```

- *Type:* string

---

##### `LastSuccess`<sup>Required</sup> <a name="LastSuccess" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.lastSuccess"></a>

```csharp
public string LastSuccess { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareNotificationPolicyWebhooksListResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult">DataCloudflareNotificationPolicyWebhooksListResult</a>

---



