
import { Cmp7553Component } from './cmp';
describe('Cmp7553Component', () => {
  it('should add', () => {
    expect(new Cmp7553Component().add7553(1)).toBe(7554);
  });
});