
import { Cmp5300Component } from './cmp';
describe('Cmp5300Component', () => {
  it('should add', () => {
    expect(new Cmp5300Component().add5300(1)).toBe(5301);
  });
});