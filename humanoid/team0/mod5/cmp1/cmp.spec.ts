
import { Cmp7051Component } from './cmp';
describe('Cmp7051Component', () => {
  it('should add', () => {
    expect(new Cmp7051Component().add7051(1)).toBe(7052);
  });
});