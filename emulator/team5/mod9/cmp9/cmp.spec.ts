
import { Cmp4599Component } from './cmp';
describe('Cmp4599Component', () => {
  it('should add', () => {
    expect(new Cmp4599Component().add4599(1)).toBe(4600);
  });
});