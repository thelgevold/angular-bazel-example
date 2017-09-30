
import { Cmp6701Component } from './cmp';
describe('Cmp6701Component', () => {
  it('should add', () => {
    expect(new Cmp6701Component().add6701(1)).toBe(6702);
  });
});