
import { Cmp6013Component } from './cmp';
describe('Cmp6013Component', () => {
  it('should add', () => {
    expect(new Cmp6013Component().add6013(1)).toBe(6014);
  });
});