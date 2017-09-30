
import { Cmp6150Component } from './cmp';
describe('Cmp6150Component', () => {
  it('should add', () => {
    expect(new Cmp6150Component().add6150(1)).toBe(6151);
  });
});