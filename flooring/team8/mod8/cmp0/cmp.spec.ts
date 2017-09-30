
import { Cmp5880Component } from './cmp';
describe('Cmp5880Component', () => {
  it('should add', () => {
    expect(new Cmp5880Component().add5880(1)).toBe(5881);
  });
});