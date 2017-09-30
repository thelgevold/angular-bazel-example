
import { Cmp4640Component } from './cmp';
describe('Cmp4640Component', () => {
  it('should add', () => {
    expect(new Cmp4640Component().add4640(1)).toBe(4641);
  });
});