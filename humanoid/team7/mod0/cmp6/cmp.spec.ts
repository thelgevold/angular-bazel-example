
import { Cmp7706Component } from './cmp';
describe('Cmp7706Component', () => {
  it('should add', () => {
    expect(new Cmp7706Component().add7706(1)).toBe(7707);
  });
});