
import { Cmp5394Component } from './cmp';
describe('Cmp5394Component', () => {
  it('should add', () => {
    expect(new Cmp5394Component().add5394(1)).toBe(5395);
  });
});