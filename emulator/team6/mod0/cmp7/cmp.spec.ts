
import { Cmp4607Component } from './cmp';
describe('Cmp4607Component', () => {
  it('should add', () => {
    expect(new Cmp4607Component().add4607(1)).toBe(4608);
  });
});