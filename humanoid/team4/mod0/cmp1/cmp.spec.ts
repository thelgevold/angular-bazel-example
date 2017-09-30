
import { Cmp7401Component } from './cmp';
describe('Cmp7401Component', () => {
  it('should add', () => {
    expect(new Cmp7401Component().add7401(1)).toBe(7402);
  });
});