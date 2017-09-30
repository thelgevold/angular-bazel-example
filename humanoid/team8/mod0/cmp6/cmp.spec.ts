
import { Cmp7806Component } from './cmp';
describe('Cmp7806Component', () => {
  it('should add', () => {
    expect(new Cmp7806Component().add7806(1)).toBe(7807);
  });
});