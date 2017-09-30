
import { Cmp6151Component } from './cmp';
describe('Cmp6151Component', () => {
  it('should add', () => {
    expect(new Cmp6151Component().add6151(1)).toBe(6152);
  });
});