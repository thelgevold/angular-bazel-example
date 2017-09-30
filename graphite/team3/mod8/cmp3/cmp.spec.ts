
import { Cmp6383Component } from './cmp';
describe('Cmp6383Component', () => {
  it('should add', () => {
    expect(new Cmp6383Component().add6383(1)).toBe(6384);
  });
});