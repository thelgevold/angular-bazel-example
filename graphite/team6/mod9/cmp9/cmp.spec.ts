
import { Cmp6699Component } from './cmp';
describe('Cmp6699Component', () => {
  it('should add', () => {
    expect(new Cmp6699Component().add6699(1)).toBe(6700);
  });
});