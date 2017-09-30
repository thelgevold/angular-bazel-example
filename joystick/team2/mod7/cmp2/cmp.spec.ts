
import { Cmp9272Component } from './cmp';
describe('Cmp9272Component', () => {
  it('should add', () => {
    expect(new Cmp9272Component().add9272(1)).toBe(9273);
  });
});