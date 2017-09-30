
import { Cmp6713Component } from './cmp';
describe('Cmp6713Component', () => {
  it('should add', () => {
    expect(new Cmp6713Component().add6713(1)).toBe(6714);
  });
});