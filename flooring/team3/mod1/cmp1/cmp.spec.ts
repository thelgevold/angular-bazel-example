
import { Cmp5311Component } from './cmp';
describe('Cmp5311Component', () => {
  it('should add', () => {
    expect(new Cmp5311Component().add5311(1)).toBe(5312);
  });
});