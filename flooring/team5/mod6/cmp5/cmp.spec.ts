
import { Cmp5565Component } from './cmp';
describe('Cmp5565Component', () => {
  it('should add', () => {
    expect(new Cmp5565Component().add5565(1)).toBe(5566);
  });
});