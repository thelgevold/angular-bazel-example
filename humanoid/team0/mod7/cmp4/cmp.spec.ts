
import { Cmp7074Component } from './cmp';
describe('Cmp7074Component', () => {
  it('should add', () => {
    expect(new Cmp7074Component().add7074(1)).toBe(7075);
  });
});