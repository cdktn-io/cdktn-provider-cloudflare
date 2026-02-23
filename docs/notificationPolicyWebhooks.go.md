# `notificationPolicyWebhooks` Submodule <a name="`notificationPolicyWebhooks` Submodule" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationPolicyWebhooks <a name="NotificationPolicyWebhooks" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/notification_policy_webhooks cloudflare_notification_policy_webhooks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/notificationpolicywebhooks"

notificationpolicywebhooks.NewNotificationPolicyWebhooks(scope Construct, id *string, config NotificationPolicyWebhooksConfig) NotificationPolicyWebhooks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig">NotificationPolicyWebhooksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig">NotificationPolicyWebhooksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.resetSecret"></a>

```go
func ResetSecret()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationPolicyWebhooks resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/notificationpolicywebhooks"

notificationpolicywebhooks.NotificationPolicyWebhooks_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/notificationpolicywebhooks"

notificationpolicywebhooks.NotificationPolicyWebhooks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/notificationpolicywebhooks"

notificationpolicywebhooks.NotificationPolicyWebhooks_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/notificationpolicywebhooks"

notificationpolicywebhooks.NotificationPolicyWebhooks_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NotificationPolicyWebhooks resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NotificationPolicyWebhooks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NotificationPolicyWebhooks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/notification_policy_webhooks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NotificationPolicyWebhooks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.lastFailure">LastFailure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.lastSuccess">LastSuccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastFailure`<sup>Required</sup> <a name="LastFailure" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.lastFailure"></a>

```go
func LastFailure() *string
```

- *Type:* *string

---

##### `LastSuccess`<sup>Required</sup> <a name="LastSuccess" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.lastSuccess"></a>

```go
func LastSuccess() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationPolicyWebhooksConfig <a name="NotificationPolicyWebhooksConfig" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/notificationpolicywebhooks"

&notificationpolicywebhooks.NotificationPolicyWebhooksConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	Url: *string,
	Secret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account id. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.name">Name</a></code> | <code>*string</code> | The name of the webhook destination. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.url">Url</a></code> | <code>*string</code> | The POST endpoint to call when dispatching a notification. |
| <code><a href="#@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.secret">Secret</a></code> | <code>*string</code> | Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supported destinations. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/notification_policy_webhooks#account_id NotificationPolicyWebhooks#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the webhook destination.

This will be included in the request body when you receive a webhook notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/notification_policy_webhooks#name NotificationPolicyWebhooks#name}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

The POST endpoint to call when dispatching a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/notification_policy_webhooks#url NotificationPolicyWebhooks#url}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-cloudflare.notificationPolicyWebhooks.NotificationPolicyWebhooksConfig.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supported destinations.

Secrets are not returned in any API response body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/notification_policy_webhooks#secret NotificationPolicyWebhooks#secret}

---



