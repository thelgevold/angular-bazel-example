
import { Cmp5150Component } from './cmp';
describe('Cmp5150Component', () => {
  it('should add', () => {
    expect(new Cmp5150Component().add5150(1)).toBe(5151);
  });
});