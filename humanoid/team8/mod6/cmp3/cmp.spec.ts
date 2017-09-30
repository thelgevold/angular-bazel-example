
import { Cmp7863Component } from './cmp';
describe('Cmp7863Component', () => {
  it('should add', () => {
    expect(new Cmp7863Component().add7863(1)).toBe(7864);
  });
});