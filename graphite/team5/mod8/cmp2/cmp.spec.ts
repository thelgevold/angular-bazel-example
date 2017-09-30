
import { Cmp6582Component } from './cmp';
describe('Cmp6582Component', () => {
  it('should add', () => {
    expect(new Cmp6582Component().add6582(1)).toBe(6583);
  });
});