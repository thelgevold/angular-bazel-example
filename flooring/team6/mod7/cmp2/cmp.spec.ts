
import { Cmp5672Component } from './cmp';
describe('Cmp5672Component', () => {
  it('should add', () => {
    expect(new Cmp5672Component().add5672(1)).toBe(5673);
  });
});