
import { Cmp7011Component } from './cmp';
describe('Cmp7011Component', () => {
  it('should add', () => {
    expect(new Cmp7011Component().add7011(1)).toBe(7012);
  });
});