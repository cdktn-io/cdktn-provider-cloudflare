# `waitingRoomEvent` Submodule <a name="`waitingRoomEvent` Submodule" id="@cdktn/provider-cloudflare.waitingRoomEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaitingRoomEvent <a name="WaitingRoomEvent" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event cloudflare_waiting_room_event}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/waitingroomevent"

waitingroomevent.NewWaitingRoomEvent(scope Construct, id *string, config WaitingRoomEventConfig) WaitingRoomEvent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig">WaitingRoomEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig">WaitingRoomEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetCustomPageHtml">ResetCustomPageHtml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDisableSessionRenewal">ResetDisableSessionRenewal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetNewUsersPerMinute">ResetNewUsersPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetPrequeueStartTime">ResetPrequeueStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetQueueingMethod">ResetQueueingMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetShuffleAtEventStart">ResetShuffleAtEventStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSuspended">ResetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTotalActiveUsers">ResetTotalActiveUsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTurnstileAction">ResetTurnstileAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTurnstileMode">ResetTurnstileMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomPageHtml` <a name="ResetCustomPageHtml" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetCustomPageHtml"></a>

```go
func ResetCustomPageHtml()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableSessionRenewal` <a name="ResetDisableSessionRenewal" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDisableSessionRenewal"></a>

```go
func ResetDisableSessionRenewal()
```

##### `ResetNewUsersPerMinute` <a name="ResetNewUsersPerMinute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetNewUsersPerMinute"></a>

```go
func ResetNewUsersPerMinute()
```

##### `ResetPrequeueStartTime` <a name="ResetPrequeueStartTime" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetPrequeueStartTime"></a>

```go
func ResetPrequeueStartTime()
```

##### `ResetQueueingMethod` <a name="ResetQueueingMethod" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetQueueingMethod"></a>

```go
func ResetQueueingMethod()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSessionDuration"></a>

```go
func ResetSessionDuration()
```

##### `ResetShuffleAtEventStart` <a name="ResetShuffleAtEventStart" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetShuffleAtEventStart"></a>

```go
func ResetShuffleAtEventStart()
```

##### `ResetSuspended` <a name="ResetSuspended" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSuspended"></a>

```go
func ResetSuspended()
```

##### `ResetTotalActiveUsers` <a name="ResetTotalActiveUsers" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTotalActiveUsers"></a>

```go
func ResetTotalActiveUsers()
```

##### `ResetTurnstileAction` <a name="ResetTurnstileAction" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTurnstileAction"></a>

```go
func ResetTurnstileAction()
```

##### `ResetTurnstileMode` <a name="ResetTurnstileMode" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTurnstileMode"></a>

```go
func ResetTurnstileMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WaitingRoomEvent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/waitingroomevent"

waitingroomevent.WaitingRoomEvent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/waitingroomevent"

waitingroomevent.WaitingRoomEvent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/waitingroomevent"

waitingroomevent.WaitingRoomEvent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/waitingroomevent"

waitingroomevent.WaitingRoomEvent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WaitingRoomEvent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WaitingRoomEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WaitingRoomEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WaitingRoomEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtmlInput">CustomPageHtmlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewalInput">DisableSessionRenewalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTimeInput">EventEndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTimeInput">EventStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinuteInput">NewUsersPerMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTimeInput">PrequeueStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethodInput">QueueingMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDurationInput">SessionDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStartInput">ShuffleAtEventStartInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspendedInput">SuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsersInput">TotalActiveUsersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.turnstileActionInput">TurnstileActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.turnstileModeInput">TurnstileModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomIdInput">WaitingRoomIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtml">CustomPageHtml</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewal">DisableSessionRenewal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTime">EventEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTime">EventStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinute">NewUsersPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTime">PrequeueStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethod">QueueingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDuration">SessionDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStart">ShuffleAtEventStart</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspended">Suspended</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsers">TotalActiveUsers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.turnstileAction">TurnstileAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.turnstileMode">TurnstileMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomId">WaitingRoomId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `CustomPageHtmlInput`<sup>Optional</sup> <a name="CustomPageHtmlInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtmlInput"></a>

```go
func CustomPageHtmlInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableSessionRenewalInput`<sup>Optional</sup> <a name="DisableSessionRenewalInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewalInput"></a>

```go
func DisableSessionRenewalInput() interface{}
```

- *Type:* interface{}

---

##### `EventEndTimeInput`<sup>Optional</sup> <a name="EventEndTimeInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTimeInput"></a>

```go
func EventEndTimeInput() *string
```

- *Type:* *string

---

##### `EventStartTimeInput`<sup>Optional</sup> <a name="EventStartTimeInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTimeInput"></a>

```go
func EventStartTimeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NewUsersPerMinuteInput`<sup>Optional</sup> <a name="NewUsersPerMinuteInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinuteInput"></a>

```go
func NewUsersPerMinuteInput() *f64
```

- *Type:* *f64

---

##### `PrequeueStartTimeInput`<sup>Optional</sup> <a name="PrequeueStartTimeInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTimeInput"></a>

```go
func PrequeueStartTimeInput() *string
```

- *Type:* *string

---

##### `QueueingMethodInput`<sup>Optional</sup> <a name="QueueingMethodInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethodInput"></a>

```go
func QueueingMethodInput() *string
```

- *Type:* *string

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDurationInput"></a>

```go
func SessionDurationInput() *f64
```

- *Type:* *f64

---

##### `ShuffleAtEventStartInput`<sup>Optional</sup> <a name="ShuffleAtEventStartInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStartInput"></a>

```go
func ShuffleAtEventStartInput() interface{}
```

- *Type:* interface{}

---

##### `SuspendedInput`<sup>Optional</sup> <a name="SuspendedInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspendedInput"></a>

```go
func SuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `TotalActiveUsersInput`<sup>Optional</sup> <a name="TotalActiveUsersInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsersInput"></a>

```go
func TotalActiveUsersInput() *f64
```

- *Type:* *f64

---

##### `TurnstileActionInput`<sup>Optional</sup> <a name="TurnstileActionInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.turnstileActionInput"></a>

```go
func TurnstileActionInput() *string
```

- *Type:* *string

---

##### `TurnstileModeInput`<sup>Optional</sup> <a name="TurnstileModeInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.turnstileModeInput"></a>

```go
func TurnstileModeInput() *string
```

- *Type:* *string

---

##### `WaitingRoomIdInput`<sup>Optional</sup> <a name="WaitingRoomIdInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomIdInput"></a>

```go
func WaitingRoomIdInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `CustomPageHtml`<sup>Required</sup> <a name="CustomPageHtml" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtml"></a>

```go
func CustomPageHtml() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableSessionRenewal`<sup>Required</sup> <a name="DisableSessionRenewal" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewal"></a>

```go
func DisableSessionRenewal() interface{}
```

- *Type:* interface{}

---

##### `EventEndTime`<sup>Required</sup> <a name="EventEndTime" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTime"></a>

```go
func EventEndTime() *string
```

- *Type:* *string

---

##### `EventStartTime`<sup>Required</sup> <a name="EventStartTime" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTime"></a>

```go
func EventStartTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NewUsersPerMinute`<sup>Required</sup> <a name="NewUsersPerMinute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinute"></a>

```go
func NewUsersPerMinute() *f64
```

- *Type:* *f64

---

##### `PrequeueStartTime`<sup>Required</sup> <a name="PrequeueStartTime" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTime"></a>

```go
func PrequeueStartTime() *string
```

- *Type:* *string

---

##### `QueueingMethod`<sup>Required</sup> <a name="QueueingMethod" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethod"></a>

```go
func QueueingMethod() *string
```

- *Type:* *string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDuration"></a>

```go
func SessionDuration() *f64
```

- *Type:* *f64

---

##### `ShuffleAtEventStart`<sup>Required</sup> <a name="ShuffleAtEventStart" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStart"></a>

```go
func ShuffleAtEventStart() interface{}
```

- *Type:* interface{}

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspended"></a>

```go
func Suspended() interface{}
```

- *Type:* interface{}

---

##### `TotalActiveUsers`<sup>Required</sup> <a name="TotalActiveUsers" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsers"></a>

```go
func TotalActiveUsers() *f64
```

- *Type:* *f64

---

##### `TurnstileAction`<sup>Required</sup> <a name="TurnstileAction" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.turnstileAction"></a>

```go
func TurnstileAction() *string
```

- *Type:* *string

---

##### `TurnstileMode`<sup>Required</sup> <a name="TurnstileMode" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.turnstileMode"></a>

```go
func TurnstileMode() *string
```

- *Type:* *string

---

##### `WaitingRoomId`<sup>Required</sup> <a name="WaitingRoomId" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomId"></a>

```go
func WaitingRoomId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WaitingRoomEventConfig <a name="WaitingRoomEventConfig" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/waitingroomevent"

&waitingroomevent.WaitingRoomEventConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EventEndTime: *string,
	EventStartTime: *string,
	Name: *string,
	WaitingRoomId: *string,
	ZoneId: *string,
	CustomPageHtml: *string,
	Description: *string,
	DisableSessionRenewal: interface{},
	NewUsersPerMinute: *f64,
	PrequeueStartTime: *string,
	QueueingMethod: *string,
	SessionDuration: *f64,
	ShuffleAtEventStart: interface{},
	Suspended: interface{},
	TotalActiveUsers: *f64,
	TurnstileAction: *string,
	TurnstileMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventEndTime">EventEndTime</a></code> | <code>*string</code> | An ISO 8601 timestamp that marks the end of the event. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventStartTime">EventStartTime</a></code> | <code>*string</code> | An ISO 8601 timestamp that marks the start of the event. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.name">Name</a></code> | <code>*string</code> | A unique name to identify the event. Only alphanumeric characters, hyphens and underscores are allowed. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.waitingRoomId">WaitingRoomId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#waiting_room_id WaitingRoomEvent#waiting_room_id}. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.customPageHtml">CustomPageHtml</a></code> | <code>*string</code> | If set, the event will override the waiting room's `custom_page_html` property while it is active. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.description">Description</a></code> | <code>*string</code> | A note that you can use to add more details about the event. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.disableSessionRenewal">DisableSessionRenewal</a></code> | <code>interface{}</code> | If set, the event will override the waiting room's `disable_session_renewal` property while it is active. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.newUsersPerMinute">NewUsersPerMinute</a></code> | <code>*f64</code> | If set, the event will override the waiting room's `new_users_per_minute` property while it is active. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.prequeueStartTime">PrequeueStartTime</a></code> | <code>*string</code> | An ISO 8601 timestamp that marks when to begin queueing all users before the event starts. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.queueingMethod">QueueingMethod</a></code> | <code>*string</code> | If set, the event will override the waiting room's `queueing_method` property while it is active. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.sessionDuration">SessionDuration</a></code> | <code>*f64</code> | If set, the event will override the waiting room's `session_duration` property while it is active. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.shuffleAtEventStart">ShuffleAtEventStart</a></code> | <code>interface{}</code> | If enabled, users in the prequeue will be shuffled randomly at the `event_start_time`. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.suspended">Suspended</a></code> | <code>interface{}</code> | Suspends or allows an event. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.totalActiveUsers">TotalActiveUsers</a></code> | <code>*f64</code> | If set, the event will override the waiting room's `total_active_users` property while it is active. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.turnstileAction">TurnstileAction</a></code> | <code>*string</code> | If set, the event will override the waiting room's `turnstile_action` property while it is active. |
| <code><a href="#@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.turnstileMode">TurnstileMode</a></code> | <code>*string</code> | If set, the event will override the waiting room's `turnstile_mode` property while it is active. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventEndTime`<sup>Required</sup> <a name="EventEndTime" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventEndTime"></a>

```go
EventEndTime *string
```

- *Type:* *string

An ISO 8601 timestamp that marks the end of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#event_end_time WaitingRoomEvent#event_end_time}

---

##### `EventStartTime`<sup>Required</sup> <a name="EventStartTime" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventStartTime"></a>

```go
EventStartTime *string
```

- *Type:* *string

An ISO 8601 timestamp that marks the start of the event.

At this time, queued users will be processed with the event's configuration. The start time must be at least one minute before `event_end_time`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#event_start_time WaitingRoomEvent#event_start_time}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique name to identify the event. Only alphanumeric characters, hyphens and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#name WaitingRoomEvent#name}

---

##### `WaitingRoomId`<sup>Required</sup> <a name="WaitingRoomId" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.waitingRoomId"></a>

```go
WaitingRoomId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#waiting_room_id WaitingRoomEvent#waiting_room_id}.

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#zone_id WaitingRoomEvent#zone_id}

---

##### `CustomPageHtml`<sup>Optional</sup> <a name="CustomPageHtml" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.customPageHtml"></a>

```go
CustomPageHtml *string
```

- *Type:* *string

If set, the event will override the waiting room's `custom_page_html` property while it is active.

If null, the event will inherit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#custom_page_html WaitingRoomEvent#custom_page_html}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A note that you can use to add more details about the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#description WaitingRoomEvent#description}

---

##### `DisableSessionRenewal`<sup>Optional</sup> <a name="DisableSessionRenewal" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.disableSessionRenewal"></a>

```go
DisableSessionRenewal interface{}
```

- *Type:* interface{}

If set, the event will override the waiting room's `disable_session_renewal` property while it is active.

If null, the event will inherit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#disable_session_renewal WaitingRoomEvent#disable_session_renewal}

---

##### `NewUsersPerMinute`<sup>Optional</sup> <a name="NewUsersPerMinute" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.newUsersPerMinute"></a>

```go
NewUsersPerMinute *f64
```

- *Type:* *f64

If set, the event will override the waiting room's `new_users_per_minute` property while it is active.

If null, the event will inherit it. This can only be set if the event's `total_active_users` property is also set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#new_users_per_minute WaitingRoomEvent#new_users_per_minute}

---

##### `PrequeueStartTime`<sup>Optional</sup> <a name="PrequeueStartTime" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.prequeueStartTime"></a>

```go
PrequeueStartTime *string
```

- *Type:* *string

An ISO 8601 timestamp that marks when to begin queueing all users before the event starts.

The prequeue must start at least five minutes before `event_start_time`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#prequeue_start_time WaitingRoomEvent#prequeue_start_time}

---

##### `QueueingMethod`<sup>Optional</sup> <a name="QueueingMethod" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.queueingMethod"></a>

```go
QueueingMethod *string
```

- *Type:* *string

If set, the event will override the waiting room's `queueing_method` property while it is active.

If null, the event will inherit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#queueing_method WaitingRoomEvent#queueing_method}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.sessionDuration"></a>

```go
SessionDuration *f64
```

- *Type:* *f64

If set, the event will override the waiting room's `session_duration` property while it is active.

If null, the event will inherit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#session_duration WaitingRoomEvent#session_duration}

---

##### `ShuffleAtEventStart`<sup>Optional</sup> <a name="ShuffleAtEventStart" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.shuffleAtEventStart"></a>

```go
ShuffleAtEventStart interface{}
```

- *Type:* interface{}

If enabled, users in the prequeue will be shuffled randomly at the `event_start_time`.

Requires that `prequeue_start_time` is not null. This is useful for situations when many users will join the event prequeue at the same time and you want to shuffle them to ensure fairness. Naturally, it makes the most sense to enable this feature when the `queueing_method` during the event respects ordering such as **fifo**, or else the shuffling may be unnecessary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#shuffle_at_event_start WaitingRoomEvent#shuffle_at_event_start}

---

##### `Suspended`<sup>Optional</sup> <a name="Suspended" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.suspended"></a>

```go
Suspended interface{}
```

- *Type:* interface{}

Suspends or allows an event.

If set to `true`, the event is ignored and traffic will be handled based on the waiting room configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#suspended WaitingRoomEvent#suspended}

---

##### `TotalActiveUsers`<sup>Optional</sup> <a name="TotalActiveUsers" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.totalActiveUsers"></a>

```go
TotalActiveUsers *f64
```

- *Type:* *f64

If set, the event will override the waiting room's `total_active_users` property while it is active.

If null, the event will inherit it. This can only be set if the event's `new_users_per_minute` property is also set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#total_active_users WaitingRoomEvent#total_active_users}

---

##### `TurnstileAction`<sup>Optional</sup> <a name="TurnstileAction" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.turnstileAction"></a>

```go
TurnstileAction *string
```

- *Type:* *string

If set, the event will override the waiting room's `turnstile_action` property while it is active.

If null, the event will inherit it.
Available values: "log", "infinite_queue".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#turnstile_action WaitingRoomEvent#turnstile_action}

---

##### `TurnstileMode`<sup>Optional</sup> <a name="TurnstileMode" id="@cdktn/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.turnstileMode"></a>

```go
TurnstileMode *string
```

- *Type:* *string

If set, the event will override the waiting room's `turnstile_mode` property while it is active.

If null, the event will inherit it.
Available values: "off", "invisible", "visible_non_interactive", "visible_managed".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/waiting_room_event#turnstile_mode WaitingRoomEvent#turnstile_mode}

---



