
import { Cmp9152Component } from './cmp';
describe('Cmp9152Component', () => {
  it('should add', () => {
    expect(new Cmp9152Component().add9152(1)).toBe(9153);
  });
});