
import { Cmp5510Component } from './cmp';
describe('Cmp5510Component', () => {
  it('should add', () => {
    expect(new Cmp5510Component().add5510(1)).toBe(5511);
  });
});