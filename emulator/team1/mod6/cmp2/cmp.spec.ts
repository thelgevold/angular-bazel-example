
import { Cmp4162Component } from './cmp';
describe('Cmp4162Component', () => {
  it('should add', () => {
    expect(new Cmp4162Component().add4162(1)).toBe(4163);
  });
});